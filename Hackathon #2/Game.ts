import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Drawer } from "./Drawer.js";

export class Game {

    protected display: Display;
    protected isOver: string;
    protected level: number;
    protected objects: Point[];
    protected player: Player | undefined;
    protected players: Player[];

    constructor(isOver: string, level: number, objects: Point[], players: Player[], x: number, y: number) {
        
        this.level = level;
        this.isOver = isOver;
        this.display = new Display(new Drawer(1,1,1))
        this.objects = objects;
        this.player = new Player("player-1", 'r', false, 'red', x, y);
        this.player = new Player("player-2", 'r', false, 'blue', x, y);
        this.players = players;

    }

}