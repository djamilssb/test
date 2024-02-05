export class Point {
    protected x: number;
    protected y: number;

    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

}