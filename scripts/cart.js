const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(item, price, quantity = 1) {
    const newItem = {
      item,
      price,
      quantity
    };

    this.items.push(newItem);
    this.increaseCount(quantity);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    let resultPrice = 0;
    for (item of this.items) {
      resultPrice += item.price * item.quantity;
    }
    return resultPrice;
  },
  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  }
};

cart.add("Ароматические свечи", 800, 5);
cart.add("Крем для рук", 230, 2);
cart.add("Масло для волос", 400);

cart.print();