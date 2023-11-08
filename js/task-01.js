const listEl = document.querySelector("#categories");
console.log(`Number of categories ${listEl.children.length}`);

[...listEl.children].forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements:${item.lastElementChild.children.length}`
  )
);
