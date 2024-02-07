import { Point } from "./Point.js";
export class Movable extends Point {
    constructor(x, y) {
        super(x, y);
        this.isMovable = false;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
