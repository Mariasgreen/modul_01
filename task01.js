'use strict';


const rectangle = {
  _width: 5,
  _height: 5,

  get perimeter() {
    return 2 * (this._width + this._height) + ' sm';
  },
  get square() {
    return this._width * this._height + ' sm*2';
  },

  set width(newWidth) {
    if (typeof newWidth === 'number') {
      this._width = newWidth;
    }
  },

  set height(newHeight) {
    if (typeof newHeight === 'number') {
      this._height = newHeight;
    }
  },
};


rectangle.width = '7';
rectangle.height = '7';


console.log(rectangle.perimeter);
console.log(rectangle.square);
