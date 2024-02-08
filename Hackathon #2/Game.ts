import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Display } from "./Display.js";
import { Movable } from "./Movable.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";


export class Game {

    protected display: Display;
    protected isOver: boolean = false;
    protected level: number = 1;
    protected objects: Point[] = [];
    protected player: number = 0;
    protected players: Player[] = [];

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
        let level:Level = await Level.get(this.level)
        this.objects = level.getObjects()
        this.display.draw(this)
        
        // let starts: Point[] = data.getPlayersStart()

        // for (let i = 0; i < starts.length; i++) {
        //     this.players.push(new Player(starts[i].getX(), starts[i].getY()))
        // }
    }

    moveObject(ob: Movable, dir: Direction) {
        const oldPosition = [ob.getX(), ob.getY()]

        // while(!ob.isMovable) { 

        if (dir == Direction.BAS) {
            ob.move(ob.getX(), ob.getY()+1)
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getX(), ob.getY()-1)
        }
        if (dir == Direction.DROITE) {
            ob.move(ob.getX() + 1, ob.getY())
        }
        if (dir == Direction.GAUCHE) {
            ob.move(ob.getX() - 1, ob.getY())
        }
    
    // }
       
        /*for ( let i = 0  ; i < this.wall?.length ; i++ ) {
            if(ob.touch(this.wall[i][],this.wall[i][1])) {
                ob.move(oldPosition[0],oldPosition[1])
            }   
        }*/
       

    }

    handleEvent() {
        document.onkeydown = (e) => {
            switch (e.keyCode) {
                case 37:
                    this.moveObject(this.players[this.player], Direction.GAUCHE)
                    break;
                case 39:
                    this.moveObject(this.players[this.player], Direction.DROITE)
                    break;
                case 38:
                    this.moveObject(this.players[this.player], Direction.HAUT)
                    break;
                case 40:
                    this.moveObject(this.players[this.player], Direction.BAS)
                    break;
            }
            this.display.draw(this)
        }

    }

    play() {
     
        this.createLvl()
        this.display.draw(this)
        this.handleEvent()
    }


}