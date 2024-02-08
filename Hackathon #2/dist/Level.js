import { Activable } from "./Activable.js";
import { Api } from "./Api.js";
// type LevelData = {
//     size : [number,number];
//     walls : [number,number] [];
//     endPlates : [number,number] [];
//     playersStart : [number,number] [];
// }
import { Wall } from "./Wall.js";
export class Level {
    constructor(level) {
        this.data = {
            "_id": "levels",
            "values": [
                {
                    "size": [26, 24],
                    "walls": [[13, 1], [13, 2], [13, 3], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [13, 12], [13, 13], [13, 14], [13, 15], [13, 16], [13, 17], [13, 18], [13, 19], [13, 20], [13, 21], [13, 22], [13, 23]],
                    "endPlates": [[6, 4], [19, 20]],
                    "playersStart": [[6, 20], [19, 4]]
                },
                {}
            ]
        };
        this.objects = [];
        this.playersStart = [];
        this.size = [];
        const dataWall = this.data.values[level].walls;
        const dataActivable = this.data.values[level].endPlates;
        const dataPlayersStart = Api.getData("levels");
        dataPlayersStart;
        const dataSize = this.data.values[level].size;
        /*if (dataPlayersStart != null) {
          for (let i = 0; i < dataPlayersStart.length; i++) {
            this.playersStart.push(new Point(dataPlayersStart[i][0], dataPlayersStart[i][1]))
          }
        }*/
        // probleme a corriger
        /*if (dataSize != null) {
          for (let i=0; i<dataSize.length; i++) {
            this.size.push(dataSize[i])
          }
        }*/
        if (dataWall) {
            for (let i = 0; i < dataWall.length; i++) {
                this.objects.push(new Wall(dataWall[i][0], dataWall[i][1]));
            }
        }
        if (dataActivable) {
            for (let i = 0; i < dataActivable.length; i++) {
                this.objects.push(new Activable(dataActivable[i][0], dataActivable[i][1]));
            }
        }
    }
    getObjects() {
        return this.objects;
    }
    getPlayersStart() {
        return this.playersStart;
    }
    getWall(level) {
        const dataWall = this.data.values[level].walls;
        if (dataWall) {
            for (let i = 0; i < dataWall.length; i++) {
                this.objects.push(new Wall(dataWall[i][0], dataWall[i][1]));
            }
        }
        return dataWall;
    }
}
