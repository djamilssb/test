import { Player } from "./Player.js";
import { Display } from "./Display.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";
import { Wall } from "./Wall.js";
export class Game {
    constructor(level = 1) {
        this.isOver = false;
        this.level = 1;
        this.objects = [];
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
        // console.log(this.players);
        let lvl = new Level(this.level);
        this.objects = lvl.getObjects();
        let starts = lvl.getPlayersStart();
        // for(let p of starts){
        //     this.players.push(new Player(p.getX(), p.getY()))
        // }
        for (let i = 0; i < starts.length; i++) {
            this.players.push(new Player(starts[i].getX(), starts[i].getY()));
        }
    }
    moveObject(ob, dir) {
        if (dir == Direction.BAS) {
            ob.move(ob.getX(), ob.getY() + 1);
            console.log(ob.getY());
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getX(), ob.getY() - 1);
            console.log(ob.getY());
        }
        if (dir == Direction.DROITE) {
            ob.move(ob.getX() + 1, ob.getY());
            console.log(ob.getX());
        }
        if (dir == Direction.GAUCHE) {
            ob.move(ob.getX() - 1, ob.getY());
            console.log(ob.getX());
        }
    }
    handleEvent() {
        document.onkeydown = (e) => {
            this.display.draw(this);
            switch (e.keyCode) {
                case 37:
                    this.moveObject(this.players[this.player], Direction.GAUCHE);
                    console.log("Vous êtes allé à gauche");
                    break;
                case 39:
                    this.moveObject(this.players[this.player], Direction.DROITE);
                    console.log("Vous êtes allé à droite");
                    break;
                case 38:
                    this.moveObject(this.players[this.player], Direction.HAUT);
                    console.log("Vous êtes allé en haut");
                    break;
                case 40:
                    this.moveObject(this.players[this.player], Direction.BAS);
                    console.log("Vous êtes allé en bas");
                    this.display.draw(this);
                    break;
            }
            this.display.draw(this);
        };
    }
    play() {
        const wall = [];
        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects instanceof Wall) {
                wall.push(this.objects);
            }
        }
        this.createLvl();
        this.display.draw(this);
        for (let i = 0; wall.length; i++) {
        }
        this.handleEvent();
    }
}
