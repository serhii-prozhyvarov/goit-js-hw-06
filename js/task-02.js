const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();
const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {

  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  fragment.appendChild(newLi);

})
ingredientsList.appendChild(fragment);