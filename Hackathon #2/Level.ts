import { Point } from "./Point.js";

// type LevelData = {
//     size : [number,number];
//     walls : [number,number] [];
//     endPlates : [number,number] [];
//     playersStart : [number,number] [];
// }



export class Level {
<<<<<<< Updated upstream
    protected levels = {
        "_id" : "levels",
        "values": [
          {
            "size" : [26,24],
            "walls" : [ [13,1], [13,2], [13,3], [13,4], [13,5], [13,6], [13,7], [13,8], [13,9], [13,10], [13,11], [13,12], [13,13], [13,14], [13,15], [13,16], [13,17], [13,18], [13,19], [13,20], [13,21], [13,22], [13,23] ],
            "endPlates" : [ [6,4], [19,20] ],
            "playersStart":[ [6,20], [19,4] ]
          }, 
          {}
        ]
      };
=======
    protected Levels: LevelData[];
>>>>>>> Stashed changes
    protected objects: Point;
    protected playersStart: Point[];
    protected size: number[];

<<<<<<< Updated upstream
    constructor(objects: Point, playersStart: Point[], size: number[]) {
=======
    constructor(Levels:LevelData[], objects: Point, playersStart: Point[], size: number[]) {
        this.Levels = Levels;
>>>>>>> Stashed changes
        this.objects = objects;
        this.playersStart = playersStart;
        this.size = size;
    }

    
    getLevel() {
<<<<<<< Updated upstream
        return this.levels;
    }  
=======
        return this.Levels
    }

   
  
>>>>>>> Stashed changes
  

}