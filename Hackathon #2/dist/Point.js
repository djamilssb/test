export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    touch(x, y) {
        if (x == this.x && this.y == y) {
            return true;
        }
    }
}
