"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPointX() {
        return this.x;
    }
    getPointY() {
        return this.y;
    }
    touch(x, y) {
        if (x == this.x && this.y == y) {
            return true;
        }
    }
}
exports.Point = Point;
