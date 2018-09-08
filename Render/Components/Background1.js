import Sheep from "./Sheep.js";
import House from "./House.js";
import Physics from "../../Logic/Physics.js";

class Background1 {
    constructor() {
        this.sheep = new Sheep();
        this.house = new House();
        this.physics = new Physics();

        this.width = 4000;
        this.height = 600;
        this.worldY = 0;
        this.order = 0;
        this.collision = false;
        this.type = "static";
        this.level = "Level0";

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        let houseBox = {
            x: parseInt(Math.random() * 3850),
            y: parseInt(Math.random() * 150 + 300),
            width: 120,
            height: 72
        };

        let i = 0;
        for(let y = 0; y < this.height; y+=2) {
          for(let x = 0; x < this.width; x+=4) {
            let sky = y*100/this.height < 45 + Math.sin(x/80)*2;
            if(sky){
                this.drawSky(x, y, i);
            } else {
                this.drawFloor(x, y, i);
            }
            i += parseInt(Math.random() * 5 + 1);
          }
        }
        this.house.addHouse(this.ctx, houseBox.x, houseBox.y);
        for(let y = 0; y < this.height; y+=2) {
          for(let x = 0; x < this.width; x+=4) {
            let sky = y*100/this.height < 45 + Math.sin(x/80)*2;
            let sheepBox = Object.assign({}, this.sheep);

            sheepBox.x = x;
            sheepBox.y = y;
            if(
                !sky &&
                i%2300 === 0 &&
                x < this.width - this.sheep.width &&
                x > this.sheep.width &&
                !this.physics.Overlaps(sheepBox, houseBox)
            )  this.sheep.addSheep(this.ctx, x, y - 18);
            i += parseInt(Math.random() * 5 + 1);
          }
        }
    };

    drawSky(x, y, i) {
        let gOpt = [5, 15, 30, 50];
        let r = 12;
        let g = gOpt[i%gOpt.length];
        let b = 255 - parseInt(y / this.height * 125);
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(x, y, 4, 2);
    };

    drawFloor(x, y, i) {
        let gOpt = [130, 150, 155];
        let r = 12;
        let g = gOpt[i%gOpt.length];
        let b = parseInt(y / this.height * 75);
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(x, y, 4, 2);
    }

    getBg(i) {
      this.id = "bg1-" + i;
      this.worldX = i * this.width;

      return this;
    }
};

export default Background1;
