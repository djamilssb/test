import { Point } from "./Point.js";
export class Activable extends Point {
    constructor(x, y) {
        super(x, y);
        this.isActive = false;
    }
}
