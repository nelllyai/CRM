console.log('%cmain.js', 'color: pink');

const product = prompt("Введите наименование товара:");
const quantity = +prompt("Введите количество:");
const category = prompt("Укажите категорию товара:");
const price = +prompt("Уточните цену единицы товара:");

console.log(`Тип данных для наименования товара: ${typeof product}`);
console.log(`Тип данных для количества: ${typeof quantity}`);
console.log(`Тип данных для категории: ${typeof category}`);
console.log(`Тип данных для цены: ${typeof price}`);

console.log(`На складе ${quantity} шт. товара "${product}" на сумму ${quantity * price}`);