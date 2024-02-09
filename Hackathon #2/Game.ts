import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Movable } from "./Movable.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";
import { Wall } from "./Wall.js";
import { EndPlate } from "./EndPlate.js";
import { Plate } from "./Plate.js";
import { Api } from "./Api.js";


export class Game {
    protected display: Display;
    protected isOver: boolean = false;
    protected level: number = 1;
    protected objects: Point[] = [];
    protected player: Player | undefined;
    protected players: Player[] = [];
    protected size: number[] = []

    constructor(level: number = 1) {
        this.level = level;
        this.display = new Display()
    }
    getObjects(): Point[] {
        return this.objects
    }

    getPlayer() {
        return this.player
    }
    getPlayers() {
        return this.players
    }
    async createLvl() {
        let level: Level = await Level.get(this.level)
        this.objects = level.getObjects()
        this.players = level.getPlayersStart()
        this.size = level.getSize()
        this.display.draw(this)

        Api.addEventListener(function (obj:any) {
            if(obj._id ==)
        })

        let starts: Point[] = level.getPlayersStart()
    }
    moveObject(ob: Movable, dir: Direction) {
    
        const oldPosition = [ob.getX(), ob.getY()]
        if (dir == Direction.BAS) {
            ob.move(ob.getX(), ob.getY() + 1)
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getX(), ob.getY() - 1)

        }
        if (dir == Direction.DROITE) {
            ob.move(ob.getX() + 1, ob.getY())
        }
        if (dir == Direction.GAUCHE) {
            ob.move(ob.getX() - 1, ob.getY())
        }

        // Pour passer let SetActive a true 
        for (let i = 0; i < this.objects.length; i++) {


            // if (this.objects[i] instanceof Plate && this.objects[i].touch(ob)) {
            //     Position.push(new Plate(this.objects[i].getX(), this.objects[i].getY()))

            // for (let i = 0; i < Position.length; i++) {
            //     Position[i].setActive()
            //     console.log(Position[i].getActive())
            // }
            // }

            if (this.objects[i] instanceof Plate && this.objects[i].touch(ob)) {
                (this.objects[i] as Plate).setActive()
            }

            if (this.objects[i] instanceof Plate && !this.objects[i].touch(ob)) {
                (this.objects[i] as Plate).falseActive()
            }
            // Pour bloquer les mouvements sur les murs et Walls 
            if (this.objects[i] instanceof Wall && this.objects[i].touch(ob) || this.players[i] instanceof Player && this.players[i].touch(ob)) {
                ob.move(oldPosition[0], oldPosition[1])
            }

        }

    }

    handleEvent() {
        document.onkeydown = (e) => {
            if (this.player != undefined) {
                switch (e.keyCode) {
                    case 37:
                        this.moveObject(this.player, Direction.GAUCHE)
                        break;
                    case 39:
                        this.moveObject(this.player, Direction.DROITE)
                        break;
                    case 38:
                        this.moveObject(this.player, Direction.HAUT)
                        break;
                    case 40:
                        this.moveObject(this.player, Direction.BAS)
                        break;
                }
            }
        }
    }
    play() {
        Api.addEventListener(function (obj:any) {
            if(obj._id ==)
        })
        this.createLvl()
        this.display.draw(this)
        this.handleEvent()


    }

    getSize(): number[] {
        return this.size
    }

    getLevel() {
        return this.level
    }

    selectPlayer() {

        let player = this.players.find(player => !player.getAssigned())
        if (player) {
          player.assign()
          this.player
        }
    }
}