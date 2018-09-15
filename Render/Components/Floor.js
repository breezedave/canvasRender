class Floor {
    constructor(id, level, x, y, w, h) {
        this.physics = {
            enabled: true,
            collision: true,
            gravity: 0,
            worldX: x,
            worldY: y
        };

        this.id = id;
        this.level = level;
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.width = w;
        this.height = h;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.collision = true;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "black";
        this.order = 1;

        let i = 0;
        for(let x = 0; x < w; x += 4) {
            for(let y = 0; y < h; y += 2) {
                this.drawDirt(x, y, i);
                i += parseInt(Math.random() * 5);
            }
        }

        this.ctx.fillStyle = "rgba(50, 155, 50, 0.3)";
        for(let x = 0; x < w; x++) {
            for(let y = 0; y < 1; y++) {
                if(i%2 === 0) this.ctx.fillRect(x, y, 4, 4);
                i += parseInt(Math.random() * 5);
            }
        }
    };

    drawDirt(x, y, i) {
        let gOpt = [79, 59, 69];
        let r = 90;
        let g = gOpt[i%gOpt.length];
        let b = parseInt(x / 2 - x + 30);
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(x, y, 4, 2);
    }
};

export default Floor;
