'use strict';


const rectangle = {
  width: 5,
  height: 5,

  get perimeter() {
    return 2 * (this.width + this.height) + ' sm';
  },
  get square() {
    return this.width * this.height + ' sm*2';
  },

  set widthRec(newWidth) {
    if (newWidth === !isNaN) {
      this.width = newWidth;
    }
  },
  set heightRec(newHeight) {
    if (newHeight === !isNaN) {
      this.height = newHeight;
    }
  },
};


rectangle.width = 25;
rectangle.height = 55;


console.log(rectangle.perimeter);
console.log(rectangle.square);
