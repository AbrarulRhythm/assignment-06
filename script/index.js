let cartDataContainer = [];

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
            <div class="plant-card p-4 rounded-lg bg-white">
                <img src="${plant.image}" class="w-full h-[200px] 2xl:h-[250px] object-cover mb-3 rounded-lg" alt="">
                <h5 class="plant-name text-sm font-semibold mb-2 dark-color">${plant.name}</h5>
                <p class="text-[12px] dark-color opacity-80 mb-2">${plant.description}</p>
                <div class="flex justify-between items-center mb-3">
                    <div class="inline-block py-1 px-3 text-sm bg-[#DCFCE7] primary-color rounded-full font-medium">${plant.category}</div>
                    <div class="text-sm font-semibold">৳<span class="palntPrice">${plant.price}</span></div>
                </div>
                <button class="add-to-cart w-full text-base lg:text-sm 2xl:text-base font-medium py-3 text-white bg-[#15803D] rounded-full cursor-pointer hover:bg-[#0a682c] duration-300">Add to Cart</button>
            </div>
        `;

        plantCardContainer.appendChild(plantDiv);
    }

    manageSpinner(false);

    // add to cart functionality
    const allCartButtons = document.getElementsByClassName('add-to-cart');

    for (let cartButton of allCartButtons) {
        cartButton.addEventListener('click', () => {
            const plantCard = cartButton.closest('.plant-card');

            const plantName = plantCard.querySelector('.plant-name').innerText;
            const plantPrice = parseInt(plantCard.querySelector('.palntPrice').innerText);

            // Cart total amount
            const totalAmount = parseInt(document.getElementById('total-amount').innerText);

            alert(`${plantName} has been added to the cart.`);

            const totalNewAmount = plantPrice + totalAmount;

            document.getElementById('total-amount').innerText = totalNewAmount;

            const cartData = {
                plantName: plantName,
                plantPrice: plantPrice
            }

            cartDataContainer.push(cartData);
            showCartData();
        });
    }
}

// Function to show cart data in ui
const showCartData = () => {
    const totalAmountWrapper = document.getElementById('total-amount-wrapper');
    const cartItemContainer = document.getElementById('cart-items-container');
    cartItemContainer.innerHTML = "";

    let index = 0; // index for remove cart item
    for (let data of cartDataContainer) {
        const div = document.createElement('div');
        div.classList.add('single-cart', 'bg-[#F0FDF4]', 'rounded-lg', 'mb-2', 'py-2', 'px-3');
        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h5 class="text-sm font-semibold mb-1">${data.plantName}</h5>
                    <h6 class="price text-base dark-color opacity-50">৳<span class="cart-plant-price">${data.plantPrice}</span> x 1</h6>
                </div>

                <div class="remove-from-cart cursor-pointer text-gray-400 hover:text-gray-700 duration-300" data-index="${index}">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        `;

        cartItemContainer.appendChild(div);
        index++; // update index
    }

    // remove cart item functionality
    const removeFromCartButtons = document.getElementsByClassName('remove-from-cart');

    for (let removeButton of removeFromCartButtons) {
        removeButton.addEventListener('click', () => {
            const index = removeButton.getAttribute('data-index'); //get index
            const cart = removeButton.closest('.single-cart');
            const cartPrice = parseInt(cart.querySelector('.cart-plant-price').innerText);

            // Cart total amount
            const totalAmount = parseInt(document.getElementById('total-amount').innerText);

            const totalNewAmount = totalAmount - cartPrice;

            document.getElementById('total-amount').innerText = totalNewAmount;

            cartDataContainer.splice(index, 1);

            showCartData();
        });
    }

    // show cart total amount wrapper
    if (cartDataContainer.length === 0) {
        totalAmountWrapper.classList.add('hidden');
    } else {
        totalAmountWrapper.classList.remove('hidden');
    }
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