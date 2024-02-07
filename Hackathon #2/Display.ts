import { Activable } from "./Activable.js";
import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Level } from "./Level.js";
import { Player } from "./Player.js";
import { Wall } from "./Wall.js";

export class Display {

    protected drawer: Drawer;

    constructor() {
        this.drawer = new Drawer(26, 24, 28)
    }

    public draw(game: Game) {
        this.drawer.clear()
        const dataObjects = game.getObjects()
        const dataPlayers = game.getPlayers()

        for (let i = 0; i < dataPlayers.length; i++) {
            this.drawer.drawCircle(dataPlayers[i].getX(), dataPlayers[i].getY(),'red')
        }
        for (let i = 0; i < dataObjects.length; i++) {
            if (dataObjects[i] instanceof Wall) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'black')
            }
            else if (dataObjects[i] instanceof Activable) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'purple')
            }
        }
    }
}