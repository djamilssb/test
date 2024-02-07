import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Drawer } from "./Drawer.js";
import { Movable } from "./Movable.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";

export class Game {

    protected display: Display;
    protected isOver: boolean = false;
    protected level: number;
    protected objects: Point[];
    protected player: Player;
    protected players: Player[];

    constructor(level: number, objects: Point[], players: Player[], x: number, y: number, player: Player) {
        this.level = level;
        this.player = player;
        this.display = new Display(new Drawer(1, 1, 1))
        this.objects = objects;
        this.players = players;
    }

    getObjects():Object[] {
        return this.objects
    }   

    getPlayer() {
        return this.player
    }
    getPlayers() {
        return this.players
    }

    moveObject(ob: Movable, dir: Direction) {
        if (dir == Direction.BAS) {
            ob.move(ob.getY() - 1, ob.getX())
        }
        else if (dir == Direction.HAUT) {
            ob.move(ob.getY() + 1, ob.getX())
        }
        else if (dir == Direction.DROITE) {
            ob.move(ob.getY(), ob.getX() - 1)
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getY(), ob.getX() + 1)
        }
    }

    handleEvent() {
        document.onkeydown = (e) => {
            switch (e.keyCode) {
                case 37:
                    this.moveObject(this.player, Direction.GAUCHE)
                    console.log("Vous êtes allé à gauche");
                    break;
                case 39:
                    this.moveObject(this.player, Direction.DROITE)
                    console.log("Vous êtes allé à droite");
                    break;
                case 38:
                    this.moveObject(this.player, Direction.HAUT)
                    console.log("Vous êtes allé en haut");
                    break;
                case 40:
                    this.moveObject(this.player, Direction.BAS)
                    console.log("Vous êtes allé en bas");
                    break;
            }
        }
    }
}