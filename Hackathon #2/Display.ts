import { Activable } from "./Activable.js";
import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Wall } from "./Wall.js";
import { Level } from "./Level.js";
import { Player } from "./Player.js";

export class Display {

    protected drawer: Drawer;

    constructor(drawer: Drawer) {
        this.drawer = new Drawer(8, 8, 8)
    }

    public draw(level: Level, players: Player[]) {
        let data = level.getLevel()
        this.drawer.clear()

        for (let i = 0; i < players.length; i++) {
            this.drawer.drawCircle(players[i].getPointX(), players[i].getPointY(), players[i].getColor())
        }

        for (let i = 0; i < data.length; i++) {
            if (data[i] == 'wall') this.drawer.drawRectangle(data[i][0], data[i][1], W);
            if (data[i] instanceof Activable) this.drawer.drawRectangle(data[i].getPointX(), data[i].getPointY());
        }
    }


}
        
    
}