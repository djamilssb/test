import { Point } from "./Point.js";
import { Game } from "./Game.js";
import { Player } from "./Player.js";
export class Movable extends Point {
    public isMovable : boolean = false;

    constructor(x:number,y:number) {
        super(x,y)
    }

    move(x: number, y: number) {
        this.x = x
        this.y = y
    }
}