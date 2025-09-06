// Load Category
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((json) => displayCategory(json.categories));
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";

    for (let category of categories) {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#" class="block py-2 px-[10px] rounded-[4px] dark-color hover:bg-[#DCFCE7] duration-300">${category.category_name}</a>
        `;

        categoryContainer.appendChild(li);
    }
}

loadCategory();