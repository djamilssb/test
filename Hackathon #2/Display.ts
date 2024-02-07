import { Activable } from "./Activable.js";
import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Level } from "./Level.js";
import { Player } from "./Player.js";
import { Wall } from "./Wall.js";

export class Display {

    protected drawer: Drawer;

    constructor(drawer: Drawer) {
        this.drawer = new Drawer(8, 8, 8)
    }

    public draw(game: Game, players: Player[], level: Level) {
        this.drawer.clear()
        level.setData()
        const dataObject = game.getObjects()
        

        for (let i = 0; i < players.length; i++) {
            this.drawer.drawCircle(players[i].getPointX(), players[i].getPointY(), players[i].getColor())
        }


        for (let i = 0; i < dataObject.length; i++) {
            if (dataObject[i] instanceof Wall) {
                this.drawer.drawCircle(dataObject[i][0], dataObject[i][1], 'red')
            }

            if (dataObject[i] instanceof Activable) {
                this.drawer.drawCircle(dataObject[i][0], dataObject[i][1], 'red')
            }
        }

    }
}