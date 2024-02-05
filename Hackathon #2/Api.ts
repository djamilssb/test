export class Api {
    protected base : string;
    protected islnit : boolean;
    protected source : EventSource;

    constructor(base:string, islnit:boolean,source:EventSource) {
        this.base = base;
        this.islnit = false;
        this.source = source;
    }
}