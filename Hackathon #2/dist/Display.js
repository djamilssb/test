import { Activable } from "./Activable.js";
import { Drawer } from "./Drawer.js";
import { Wall } from "./Wall.js";
export class Display {
    constructor() {
        this.drawer = new Drawer(26, 24, 28);
    }
    draw(game) {
        this.drawer.clear();
        const dataObjects = game.getObjects();
        const dataPlayers = game.getPlayers();
        for (let i = 0; i < dataPlayers.length; i++) {
            this.drawer.drawCircle(dataPlayers[i].getX(), dataPlayers[i].getY(), 'red');
        }
        for (let i = 0; i < dataObjects.length; i++) {
            if (dataObjects[i] instanceof Wall) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'black');
            }
            else if (dataObjects[i] instanceof Activable) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'purple');
            }
        }
    }
}
