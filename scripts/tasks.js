console.log('%ctasks.js', 'color: yellow');

//2
const rain = Math.round(Math.random());

if (rain) {
  console.log("Пошел дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}

//3
const mathPoints = +prompt("Введите кол-во баллов по математике:");
const rusPoints = +prompt("Введите кол-во баллов по русскому языку:");
const infoPoints = +prompt("Введите кол-во баллов по информатике:");

if (mathPoints + rusPoints + infoPoints >= 265) {
  alert("Поздравляю, вы поступили на бюджет!");
} else {
  alert("Увы...");
}

//4
const money = +prompt("Владимир, сколько денег хотите снять?");

if (money % 100) {
  console.log("Такой суммы в банкомате нет");
} else {
  console.log("Такую сумму банкомат сможет выдать");
}