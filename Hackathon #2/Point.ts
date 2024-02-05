export class Point {
    protected x: number;
    protected y: number;

    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }

    getPointX() {
        return this.x
    }

    getPointY() {
        return this.y
    }

}