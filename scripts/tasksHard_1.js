console.log('%ctasksHard_1.js', 'color: red');

const income = +prompt("Введите доход:");

console.log("Посчитаем по обычной системе:");
if (income <= 15000) {
  console.log("Сумма налога:", 0.13 * income);
} else if (income <= 50000) {
  console.log("Сумма налога:", 0.2 * income);
} else {
  console.log("Сумма налога:", 0.3 * income);
}