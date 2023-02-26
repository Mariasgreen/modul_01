'use strict';
const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  get TotalPrice() {
    return this.calculateItemPrice();
  },

  add(item, price, itemCount = 1) {
    const addItems = {
      item,
      price,
      itemCount,

    };

    this.items.push(addItems);
    this.increaseCount(itemCount);
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`total : ${this.TotalPrice} $`);
  },

  calculateItemPrice() {
    return this.items.reduce((acc, items) =>
      acc + (items.price * items.itemCount) * ((100 - this.discount) / 100), 0);
  },

  increaseCount(itemCount) {
    return this.count += itemCount;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },


  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

cart.add('jeans', 120, 2);


cart.setDiscount = 'METHED';

cart.print();
