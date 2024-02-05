export class Api {
    protected base : string;
    protected islnit : boolean = false;
    protected source : EventSource;

    constructor(base:string,source:EventSource) {
        this.base = base;
        this.source = source;
    }
}