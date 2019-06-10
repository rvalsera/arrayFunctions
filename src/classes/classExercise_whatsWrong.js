class Polygon {
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
  }
  
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

new Square(4);
console.log(Square.name);
console.log(Square.height);
console.log(Square.width);

new Polygon(4, 4);
console.log(Polygon.name);
console.log(Polygon.height);
console.log(Polygon.width);