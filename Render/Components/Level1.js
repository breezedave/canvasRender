import Floor from "./Floor.js";

class Level1 {
    constructor () {
        this.components = [];

        this.components.push(new Floor("l1f1","Level1", 0, 500, 200, 25));
        this.components.push(new Floor("l1f2","Level1", 250, 400, 200, 25));
        this.components.push(new Floor("l1f3","Level1", 420, 500, 100, 15));
        this.components.push(new Floor("l1f4","Level1", 550, 600, 200, 25));
        this.components.push(new Floor("l1f5","Level1", 750, 500, 250, 15));
        this.components.push(new Floor("l1f6","Level1", 1050, 400, 150, 25));
        this.components.push(new Floor("l1f7","Level1", 1200, 450, 30, 25));
        this.components.push(new Floor("l1f8","Level1", 1250, 300, 100, 5));
        this.components.push(new Floor("l1f9","Level1", 1350, 400, 200, 25));
        this.components.push(new Floor("l1f10","Level1", 1500, 500, 300, 15));
    }
}

export default Level1;
