//JavaScript classes make it simpler to create objects and deal with inheritance.

//Notes taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

//declaring a Polygon Class
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// can also do a class expression
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};