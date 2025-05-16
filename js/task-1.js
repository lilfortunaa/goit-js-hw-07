const listWithId = document.querySelector('#categories');
const items = listWithId.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('ul li').length;

  console.log(`Category:${title}`);
  console.log(`Elements:${elements}`);
});
