const ulElem = document.querySelector('#categories');
const liElem = ulElem.querySelectorAll('.item');
console.log(`Number of categories: ${liElem.length}`);

liElem.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
