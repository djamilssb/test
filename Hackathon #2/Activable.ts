import { Point } from "./Point.js";

export class Activable extends Point {
    protected isActive : boolean = false;

    constructor(x:number,y:number) {
        super(x,y)
    }

}