const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const li = document.createElement("li");
li.textContent = ingredients.forEach((ingredient) => ingredient)
console.log(li.textContent);