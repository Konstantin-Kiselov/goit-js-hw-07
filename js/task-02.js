const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsCreateList = item => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
};

const createIngredients = ingredients.map(ingredient =>
  ingredientsCreateList(ingredient));

console.log(createIngredients);

ingredientsList.append(...createIngredients);
