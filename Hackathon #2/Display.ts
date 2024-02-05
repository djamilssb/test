import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";

export class Display {

    protected drawer : Drawer;
    
    constructor(drawer:Drawer) {
        this.drawer = new Drawer(8,8,8)
        }
        
        public (game: Game){
            let player = game.getPlayers();
            this.drawer.clear()

        }
        
    
}