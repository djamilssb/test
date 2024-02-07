export class Point {
    public x: number;
    public y: number;

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
   
    touch(x:number,y:number){
        if(x == this.x && this.y == y){
            return true;
        }
    }
}