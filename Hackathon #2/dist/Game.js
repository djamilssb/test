var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Display } from "./Display.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";
export class Game {
    constructor(level = 1) {
        this.isOver = false;
        this.level = 1;
        this.objects = [];
        this.player = 0;
        this.players = [];
        this.size = [];
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
        return __awaiter(this, void 0, void 0, function* () {
            let level = yield Level.get(this.level);
            this.objects = level.getObjects();
            this.players = level.getPlayersStart();
            this.size = level.getSize();
            this.display.draw(this);
            console.log(this.size);
            let starts = level.getPlayersStart();
            // for (let i = 0; i < starts.length; i++) {
            //     this.players.push(new Player(starts[i].getX(), starts[i].getY()))
            // }
        });
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
    getSize() {
        return this.size;
    }
}
