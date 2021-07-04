function categoriesCount() {
    const countCategories = document.querySelectorAll('li.item');
    console.log(`В списке ${countCategories.length} категории.`);

    countCategories.forEach(category => {
        console.log(`Категория: ${category.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
    });
}

categoriesCount();