import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
export class Game {
    protected display: Display;
    protected isOver: string;
    protected level: number;
    protected objects: Point[];
    protected player: Player | undefined;
    protected players: Player[];
    constructor(display: Display, isOver: string, level: number, objects: Point[], players: Player[], x: number, y: number) {
        this.level = level;
        this.isOver = isOver;
        this.display = new Display()
        this.objects = objects;
        this.player = new Player("player-1", 'r', false, 'red', x, y);
        this.player = new Player("player-2", 'r', false, 'blue', x, y);
        this.players = players;
    }
    

}