import { Point } from "./Point";

export class Movable extends Point {
    protected isMovable : boolean = false;

    constructor(x:number,y:number) {
        super(x,y)
    }
    
}