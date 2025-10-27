function Point(x, y) {
    // paste definition from task 1
    this.x = x;
    this.y = y;

    this.print = function() {
        console.log("(" + this.x + ", " + this.y + ")");
    };

    // midpoint method
    this.midpoint = function(p2) {
        // midpoint formula
        let mx = (this.x + p2.x) / 2;
        let my = (this.y + p2.y) / 2;
        return new Point(mx, my);
    };

    // scaleTo method
    this.scaleTo = function(p2, s) {
        // scale formula
        let sx = this.x + (p2.x - this.x) * s;
        let sy = this.y + (p2.y - this.y) * s;
        return new Point(sx, sy);
    };
}

/* Do not change the lines below */
let p1 = new Point(1, 5);
let p2 = new Point(5, 7);
p1.midpoint(p2).print(); // expect (3, 6)
p2.midpoint(p1).print(); // expect (3, 6)

/* Do not change the lines below */
let p3 = new Point(0, 0);
let p4 = new Point(4, 8);
p3.scaleTo(p4, 0.25).print(); // expect (1, 2)
p4.scaleTo(p3, 0.75).print(); // expect (1, 2)
