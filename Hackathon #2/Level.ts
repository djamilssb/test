import { Activable } from "./Activable.js";
import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Api } from "./Api.js";

type LevelData = {
    size : [number,number];
    walls : [number,number] [];
    endPlates : [number,number] [];
    playersStart : [number,number] [];
}

import { Wall } from "./Wall.js";
export class Level {

  protected objects: Point[] = [];
  protected playersStart: Point[] = []; 
  protected size: number[] = [];

  static async get(level:number) {
    const levels = await Api.getData("levels")
    return new Level(levels.values[level])
  }

  private constructor(data:LevelData) {
    if (data.walls) {
      for (let i = 0; i < data.walls.length; i++) {
        this.objects.push(new Wall(data.walls[i][0], data.walls[i][1]))
      }
    }
    if (data.endPlates) {
      for (let i = 0; i < data.endPlates.length; i++) {
        this.objects.push(new Activable(data.endPlates[i][0], data.endPlates[i][1]))
      }
    }
    
  }

  getObjects(): Point[] {
    return this.objects
  }

  getPlayersStart(): Point[] {
    return this.playersStart
  }

}