// Create a template object (prototype) for a 2D point
let PointPrototype = {
    x: 0,
    y: 0,

    // method to print the coordinates
    print: function() {
        console.log("(" + this.x + ", " + this.y + ")");
    }
};

// Function that creates a point object using the prototype
function createPoint(x, y) {
    // create a new object based on PointPrototype
    let point = Object.create(PointPrototype);
    point.x = x;
    point.y = y;
    return point;
}

// test the prototype-based objects
// do not change
let p1 = createPoint(3, 4);
p1.print();
p1 = createPoint(10, 15);
p1.print();
p1 = createPoint(-2, 8);
p1.print();

// Constructor function version
function Point(x, y) {
    this.x = x;
    this.y = y;

    this.print = function() {
        console.log("(" + this.x + ", " + this.y + ")");
    };
}

// Test creating objects with the constructor Point
// do not change print statements
let p2 = new Point(3, 4);
p2.print();
p2 = new Point(10, 15);
p2.print();
p2 = new Point(-2, 8);
p2.print();