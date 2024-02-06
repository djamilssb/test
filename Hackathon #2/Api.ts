export class Api {
    protected base : string;
    protected islnit : boolean = false;
    public source : EventSource;

    constructor(base:string,source:EventSource) {
        this.base = base;
        this.source = source;
        window.addEventListener("keydown", this.handleKeyDown, true);
    }

    private handleKeyDown(event: KeyboardEvent) {

        event.preventDefault();
    }
}
