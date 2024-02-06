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

    public draw(Game: Game, players: Player[], level:Level) {
        this.drawer.clear()
        level.setData()

         const salut = level.getData()

        for (let i = 0; i < players.length; i++) {
            this.drawer.drawCircle(players[i].getPointX(), players[i].getPointY(), players[i].getColor())
        }
    
        for (let i=0 ; i < level.setData().length ; i++)

        
    }

    


}
        
    
}