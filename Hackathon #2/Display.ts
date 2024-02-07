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
        const dataObjects = level.getObjects()
        
        for (let i = 0; i < players.length; i++) {
            this.drawer.drawCircle(players[i].getX(), players[i].getY(), players[i].getColor())
        }

        for (let i = 0; i < dataObjects.length; i++) {
            
            this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'red')

            if (dataObjects[i] instanceof Activable) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'red')
            }
        }
    }
}