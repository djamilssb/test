import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Drawer } from "./Drawer.js";
import { Movable } from "./Movable.js";
import { Direction } from "./Direction.js";

export class Game {

    protected display: Display;
    protected isOver: boolean = false;
    protected level: number;
    protected objects: Point[];
    protected player: Player;
    protected players: Player[];

    constructor(level: number, objects: Point[], players: Player[], x: number, y: number, player:Player) {
        
        this.level = level;
        this.player = player
        this.display = new Display(new Drawer(1,1,1))
        this.objects = objects;
        this.players = players;
    
    }

    getObjects() {
        return this.objects
    }
    getPlayer() {
        return this.player
    }
    getPlayers() {
        return this.players
    }


    watchEvent() {
        document.onkeydown = (e) => {            
            let addX = 0;
            let addY = 0;

            let oldPosition = [this.player.getPointX() , this.player.getPointY()]
            switch (e.keyCode) {
                case 37:
                    addX = -1
                    console.log("Vous êtes allé à gauche");
                    break;
                case 39:
                    addX = +1
                    console.log("Vous êtes allé à droite");
                    break;
                case 38:
                    addY = +1
                    console.log("Vous êtes allé en haut");
                    break;
                case 40:
                    addY = -1
                    console.log("Vous êtes allé en bas");
                    break;
            }
            this.player.move(this.player.getPointX()+addX,this.player.getPointY()+ addY);
        }
    }

    

}