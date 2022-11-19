console.log('%ctasksHard_2.js', 'color: orange');

console.log("Посчитаем по усложенной системе:");
let sum = 0;

if (income <= 15000) {
  sum += income * 0.13;
} else {
  sum += 15000 * 0.13;

  if (income <= 50000) {
    sum += (income - 15000) * 0.2;
  } else {
    sum += (50000 - 15000) * 0.2;
    sum += (income - 50000) * 0.3;
  }
}

console.log("Сумма налога:", sum);