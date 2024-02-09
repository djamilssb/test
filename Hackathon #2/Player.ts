import { Api } from "./Api.js";
import { Movable } from "./Movable.js";

export class Player extends Movable {
    protected id: string
    // protected rev: string;
    protected assigned: boolean;
    // protected color: string;

    constructor(x: number, y: number, id: string) {
        super(x, y)
        this.id = id;
        // this.rev = rev;
        this.assigned = false;
        // this.color = color;
    }

    getColor() {
        return 'red'
    }
    getId() {
        return this.id
    }

    compareId(): boolean {
        const id = this.getId()
        Api.addEventListener(function (obj: any) {
            if (obj._id == id) return true
        })
        return false
    }
    assign() {
        this.assigned = true
    }

    getAssigned(): boolean {
        return this.assigned
    }
}