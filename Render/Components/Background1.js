class Background1 {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.level = "Level0";
        this.width = 4000;
        this.height = 700;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.worldY = 0;
        this.collision = false;
        this.ctx = this.canvas.getContext("2d");
        this.order = 0;

        let i = 0;
        for(let y = 0; y < this.height; y+=2) {
          for(let x = 0; x < this.width; x+=4) {
            let sky = y*100/this.height < 45 + Math.sin(x/80)*2;
            if(sky){
                this.drawSky(x, y, i);
            } else {
                this.drawFloor(x, y, i);
                if(i%2300 === 0 && x < this.width - 22 && x > 22) { //sheeps
                    //this.addSheep(x, y);
                }
                //if(i%10000 === 0 && x < this.width - 22 && x > 22) { //sheeps
                    this.addHouse(100, 600);
                //}
            }
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

    addSheep(x, y) {
        this.ctx.fillStyle = "rgb(250, 255, 245)";
        this.ctx.fillRect(x    , y - 16, 8, 4);
        this.ctx.fillRect(x + 2, y - 18, 4, 8);

        this.ctx.fillRect(x + 4, y - 13, 12, 6);
        this.ctx.fillRect(x + 7, y - 16, 6, 12);

        this.ctx.fillRect(x + 10, y - 13, 12, 6);
        this.ctx.fillRect(x + 14, y - 16, 6, 12);

        this.ctx.fillStyle = "rgb(96, 80, 66)";
        this.ctx.fillRect(x + 9 , y - 4, 2, 4);
        this.ctx.fillRect(x + 15, y - 4, 2, 4);

        this.ctx.fillStyle = "rgb(125, 125, 125)";
        this.ctx.fillRect(x + 2 , y - 16, 2, 2);

        this.ctx.fillStyle = "rgb(215, 225, 235)";
        this.ctx.fillRect(x + 14, y - 16, 1, 3);
    }

    addHouse(x, y) {
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(x + 2, y - 40);
        this.ctx.lineTo(x + 2, y - 78);
        this.ctx.lineTo(x + 60, y - 118);
        this.ctx.lineTo(x + 118, y - 78);
        this.ctx.lineTo(x + 118, y - 40);
        this.ctx.fill();

        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.moveTo(x + 2  , y - 78);
        this.ctx.lineTo(x + 0  , y - 78);
        this.ctx.lineTo(x + 60 , y - 120);
        this.ctx.lineTo(x + 120, y - 78);
        this.ctx.lineTo(x + 118, y - 78);
        this.ctx.lineTo(x + 60 , y - 118);
        this.ctx.fill();


    }

    getBg(i) {
      this.id = "bg1-" + i;
      this.worldX = i * this.width;

      return this;
    }
};

export default Background1;
