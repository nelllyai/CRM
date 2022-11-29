'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(item, price, quantity = 1) {
    const newItem = {
      item,
      price,
      quantity,
    };

    this.items.push(newItem);
    this.increaseCount(quantity);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    const priceWithoutDiscount = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);

    return priceWithoutDiscount - this.discount / 100 * priceWithoutDiscount;
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

cart.add('Ароматические свечи', 800, 5);
cart.add('Крем для рук', 230, 2);
cart.add('Масло для волос', 400);

cart.print();

cart.setDiscount = 'METHED';
console.log('Применили промокод METHED:');
cart.print();

cart.setDiscount = 'NEWYEAR';
console.log('Применили промокод NEWYEAR:');
cart.print();
