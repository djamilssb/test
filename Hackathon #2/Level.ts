import { Point } from "./Point.js";

type LevelData = {
    size : [number,number];
    walls : [number,number] [];
    endPlates : [number,number] [];
    playersStart : [number,number] [];
}



export class Level {
    protected LEVELS: LevelData[];
    protected objects: Point;
    protected playersStart: Point[];
    protected size: number[];

    constructor(LEVELS:LevelData[], objects: Point, playersStart: Point[], size: number[]) {
        this.LEVELS = LEVELS;
        this.objects = objects;
        this.playersStart = playersStart;
        this.size = size;
    }

    
    getLevel(level: number): LevelData {
        return this.LEVELS[level];
    }
  
  

}