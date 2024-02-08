import { Player } from "./Player.js";
import { Display } from "./Display.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";
import { Api } from "./Api.js";
export class Game {
    constructor(level = 1) {
        this.isOver = false;
        this.level = 1;
        this.objects = [];
        this.wall = [];
        this.player = 0;
        this.players = [];
        this.level = level;
        this.display = new Display();
    }
    getObjects() {
        return this.objects;
    }
    getPlayer() {
        return this.player;
    }
    getPlayers() {
        return this.players;
    }
    createLvl() {
        let lvl = new Level(this.level);
        this.wall = lvl.getWall(this.level);
        let starts = lvl.getPlayersStart();
        let level = Api.getData("levels");
        console.log(level);
        // for(let p of starts){
        //     this.players.push(new Player(p.getX(), p.getY()))
        // }
        for (let i = 0; i < starts.length; i++) {
            this.players.push(new Player(starts[i].getX(), starts[i].getY()));
        }
    }
    moveObject(ob, dir) {
        const oldPosition = [ob.getX(), ob.getY()];
        // while(!ob.isMovable) { 
        if (dir == Direction.BAS) {
            ob.move(ob.getX(), ob.getY() + 1);
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getX(), ob.getY() - 1);
        }
        if (dir == Direction.DROITE) {
            ob.move(ob.getX() + 1, ob.getY());
        }
        if (dir == Direction.GAUCHE) {
            ob.move(ob.getX() - 1, ob.getY());
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
                    this.moveObject(this.players[this.player], Direction.GAUCHE);
                    break;
                case 39:
                    this.moveObject(this.players[this.player], Direction.DROITE);
                    break;
                case 38:
                    this.moveObject(this.players[this.player], Direction.HAUT);
                    break;
                case 40:
                    this.moveObject(this.players[this.player], Direction.BAS);
                    break;
            }
            this.display.draw(this);
        };
    }
    play() {
        this.createLvl();
        this.display.draw(this);
        this.handleEvent();
    }
}
