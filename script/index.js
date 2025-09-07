// Loading Spinner
const manageSpinner = (state) => {
    const loadingSpinner = document.getElementById('spinner');
    const plantCardContainer = document.getElementById('plant-card-container');

    if (state == true) {
        loadingSpinner.classList.add('block');
        loadingSpinner.classList.remove('hidden');
        plantCardContainer.classList.add('hidden')
    } else {
        loadingSpinner.classList.remove('block');
        loadingSpinner.classList.add('hidden');
        plantCardContainer.classList.remove('hidden');
    }
}

// load all category
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((json) => displayCategory(json.categories));
}

// load all plants
const loadAllPlants = () => {
    manageSpinner(true);

    fetch('https://openapi.programming-hero.com/api/plants')
        .then((res) => res.json())
        .then((json) => displayAllPlants(json.plants));
}

// remove all active class
const removeActive = () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach((categoryButton) => {
        categoryButton.classList.remove('active');
    })
}

// load plants by categories
const loadCategoryPlant = (id) => {
    manageSpinner(true);

    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            removeActive(); // remove all active class
            const clickBtn = document.getElementById(`category-btn-${id}`);
            clickBtn.classList.add('active'); // add active class

            displayAllPlants(json.plants)
        });
}

// display plants card
const displayAllPlants = (plants) => {
    const plantCardContainer = document.getElementById('plant-card-container');
    plantCardContainer.innerHTML = "";

    for (let plant of plants) {
        const plantDiv = document.createElement('div');
        plantDiv.classList.add('w-full', 'lg:w-4/12', 'px-3', '2xl:px-[15px]', 'mb-6', '2xl:mb-[30px]');
        plantDiv.innerHTML = `
            <div class="p-4 rounded-lg bg-white">
                <img src="${plant.image}" class="w-full h-[200px] 2xl:h-[250px] object-cover mb-3 rounded-lg" alt="">
                <h5 class="text-sm font-semibold mb-2 dark-color">${plant.name}</h5>
                <p class="text-[12px] dark-color opacity-80 mb-2">${plant.description}</p>
                <div class="flex justify-between items-center mb-3">
                    <div class="inline-block py-1 px-3 text-sm bg-[#DCFCE7] primary-color rounded-full font-medium">${plant.category}</div>
                    <span class="text-sm font-semibold">৳${plant.price}</span>
                </div>
                <button class="add-to-card w-full text-base lg:text-sm 2xl:text-base font-medium py-3 text-white bg-[#15803D] rounded-full cursor-pointer hover:bg-[#0a682c] duration-300">Add to Cart</button>
            </div>
        `;

        plantCardContainer.appendChild(plantDiv);
    }

    manageSpinner(false);
}

// display all category
const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";

    for (let category of categories) {
        const li = document.createElement('li');
        li.innerHTML = `
            <button id="category-btn-${category.id}" onclick="loadCategoryPlant(${category.id})" class="category-btn block w-full text-left py-2 px-[10px] rounded-[4px] dark-color hover:bg-[#b5ebc8] cursor-pointer duration-300">${category.category_name}</button>
        `;

        categoryContainer.appendChild(li);
    }
}

loadAllPlants();
loadCategory();