class Background1 {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.level = "Level0";
        this.canvas.width = 4000;
        this.canvas.height = 700;
        this.worldY = 0;
        this.collision = false;
        this.ctx = this.canvas.getContext("2d");
        this.order = 0;

        let gOpt1 = [5, 15, 30, 50];
        let gOpt2 = [130, 150, 155];

        let i = 0;
        for(let y = 0; y < this.canvas.height; y+=2) {
          for(let x = 0; x < this.canvas.width; x+=4) {
            let sky = y*100/this.canvas.height < 45 + Math.sin(x/80)*2;
            if(sky){
              let r = 12;
              let g = gOpt1[i%gOpt1.length];
              let b = 255 - parseInt(y / this.canvas.height * 125);
              this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
              this.ctx.fillRect(x, y, 4, 2);
            } else {
              let r = 12;
              let g = gOpt2[i%gOpt2.length];
              let b = parseInt(y / this.canvas.height * 75);
              this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
              this.ctx.fillRect(x, y, 4, 2);
            }
            i += parseInt(Math.random() * 5 + 1)
            if(!sky && i%2300 === 0) { //sheeps
                this.ctx.fillStyle = "rgb(250, 255, 245)";
                this.ctx.fillRect(x + 1, y - 16, 8, 4);
                this.ctx.fillRect(x + 3, y - 18, 4, 8);

                this.ctx.fillRect(x + 5, y - 13, 12, 6);
                this.ctx.fillRect(x + 8, y - 16, 6, 12);

                this.ctx.fillRect(x + 11, y - 13, 12, 6);
                this.ctx.fillRect(x + 14, y - 16, 6, 12);

                this.ctx.fillStyle = "rgb(96, 80, 66)";
                this.ctx.fillRect(x + 10, y - 4, 2, 4);
                this.ctx.fillRect(x + 16, y - 4, 2, 4);

                this.ctx.fillStyle = "rgb(125, 125, 125)";
                this.ctx.fillRect(x + 2, y - 16, 2, 2);

                this.ctx.fillStyle = "rgb(215, 225, 235)";
                this.ctx.fillRect(x + 15, y - 16, 1, 3);

            }
          }
        }
    };

    getBg(i) {
      this.id = "bg1-" + i;
      this.worldX = i * this.canvas.width;

      return this;
    }
};

export default Background1;
