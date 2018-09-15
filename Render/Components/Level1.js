import Floor from "./Floor.js";
import Player from "./Player.js";

class Level1 {
    constructor () {
        this.components = [];

        this.components.push(new Floor("l1f7","Level1", 4350, -1, 2000, 601));
        this.components.push(new Floor("l1f6","Level1", 3950, 300, 400, 300));
        this.components.push(new Floor("l1f5","Level1", 3300, 350, 600, 250));
        this.components.push(new Floor("l1f4","Level1", 2700, 400, 540, 200));
        this.components.push(new Floor("l1f3","Level1", 2600, 440, 100, 160));
        this.components.push(new Floor("l1f2","Level1", 2000, 400, 600, 200));
        this.components.push(new Floor("l1f1","Level1", -1, -1, 2001, 601));

        this.components.push(new Player("Player", "Level1", 2050, 320));

    }
}

export default Level1;
