"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Drawer_js_1 = require("./Drawer.js");
class Display {
    constructor(drawer) {
        this.drawer = new Drawer_js_1.Drawer(8, 8, 8);
    }
    public(game) {
        let player = game.getPlayers();
        let wall = game.getObjects;
        this.drawer.clear();
        for (let i = 0; i < player.length; i++) {
            this.drawer.drawCircle(player[i].getPointX(), player[i].getPointY(), 'red');
        }
        for (let i = 0; i < wall.length; i++) {
            this.drawer.drawRectangle(3, 3, 'pinks');
        }
    }
}
exports.Display = Display;
