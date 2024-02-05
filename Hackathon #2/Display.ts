import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Wall } from "./Wall.js";

export class Display {

    protected drawer : Drawer;
    
    constructor(drawer:Drawer) {
        this.drawer = new Drawer(8,8,8)
        }
        
        public (game: Game){
            let player = game.getPlayers();
            let wall = game.getObjects();
            this.drawer.clear()
            
            for(let i = 0 ; i < player.length ; i++ ) {
                this.drawer.drawCircle(player[i].getPointX(),player[i].getPointY(), player[i].getColor())
            }

            if(wall instanceof Wall)  {
            for(let i = 0 ; i < wall.length ; i++){
                this.drawer.drawRectangle(wall[i].getPointX(),wall[i].getPointY())
            }
        }

        }
        
    
}