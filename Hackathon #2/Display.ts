import { Drawer } from "./Drawer.js";

export class Display {

    protected drawer : Drawer;
    
    constructor(drawer:Drawer) {
        this.drawer = new Drawer(8,8,8)
    }
}