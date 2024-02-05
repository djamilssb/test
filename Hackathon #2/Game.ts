import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Drawer } from "./Drawer.js";

export class Game {

    protected display: Display;
    protected isOver: boolean = false;
    protected level: number;
    protected objects: Point[];
    // protected player: Player[];
    protected players: Player[];

    constructor(level: number, objects: Point[], players: Player[], x: number, y: number) {
        
        this.level = level;
        // this.player = player;
        this.display = new Display(new Drawer(1,1,1))
        this.objects = objects;
        this.players = players;


        
    }

<<<<<<< Updated upstream
    getObjects() {

        return this.objects
    }

    getPlayers() {
        
        return this.players
    }
=======
    
>>>>>>> Stashed changes

}