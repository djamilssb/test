import { Movable } from "./Movable.js";
export class Player extends Movable {
    // protected id: string;
    // protected rev: string;
    // protected assigned: boolean;
    // protected color: string;
    constructor(x, y) {
        super(x, y);
        // this.id = id;
        // this.rev = rev;
        // this.assigned = assigned;
        // this.color = color;
    }
    getColor() {
        return 'red';
    }
    getId() {
        return '0';
    }
}
