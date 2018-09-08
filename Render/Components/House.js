class House {
    constructor() {
        this.physics = {
            enabled: false
        };

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.width = 120;
        this.height = 120;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ctx.fillStyle = "brown"; //Brick
        this.ctx.beginPath();
        this.ctx.moveTo(2, 80);
        this.ctx.lineTo(2, 42);
        this.ctx.lineTo(60, 2);
        this.ctx.lineTo(118, 42);
        this.ctx.lineTo(118, 80);
        this.ctx.fill();

        this.ctx.fillStyle = "black"; //Brick lines
        this.ctx.fillRect(48, 10, 24, 1);
        this.ctx.fillRect(32, 20, 56, 1);
        this.ctx.fillRect(16, 30, 88, 1);
        this.ctx.fillRect(2 , 40, 116, 1);
        this.ctx.fillRect(2 , 50, 116, 1);
        this.ctx.fillRect(2 , 60, 116, 1);
        this.ctx.fillRect(2 , 70, 116, 1);

        this.ctx.fillRect(30, 70, 1, 10);
        this.ctx.fillRect(60, 70, 1, 10);
        this.ctx.fillRect(90, 70, 1, 10);

        this.ctx.fillRect(15, 60, 1, 10);
        this.ctx.fillRect(45, 60, 1, 10);
        this.ctx.fillRect(75, 60, 1, 10);
        this.ctx.fillRect(105, 60, 1, 10);

        this.ctx.fillRect(30, 50, 1, 10);
        this.ctx.fillRect(60, 50, 1, 10);
        this.ctx.fillRect(90, 50, 1, 10);

        this.ctx.fillRect(15, 40, 1, 10);
        this.ctx.fillRect(45, 40, 1, 10);
        this.ctx.fillRect(75, 40, 1, 10);
        this.ctx.fillRect(105, 40, 1, 10);

        this.ctx.fillRect(30, 30, 1, 10);
        this.ctx.fillRect(60, 30, 1, 10);
        this.ctx.fillRect(90, 30, 1, 10);

        this.ctx.fillRect(45, 20, 1, 10);
        this.ctx.fillRect(75, 20, 1, 10);

        this.ctx.fillRect(60, 10, 1, 10);

        this.ctx.fillStyle = "white"; //Roof
        this.ctx.beginPath();
        this.ctx.moveTo(2  , 42);
        this.ctx.lineTo(0  , 42);
        this.ctx.lineTo(60 , 0);
        this.ctx.lineTo(120, 42);
        this.ctx.lineTo(118, 42);
        this.ctx.lineTo(60 , 2);
        this.ctx.fill();

        this.ctx.strokeStyle = "black"; //Doors
        this.ctx.fillStyle = "red";
        this.ctx.beginPath();
        this.ctx.moveTo(44 , 80);
        this.ctx.lineTo(44 , 55);
        this.ctx.lineTo(60 , 55);
        this.ctx.lineTo(60 , 80);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(61 , 80);
        this.ctx.lineTo(61 , 55);
        this.ctx.lineTo(76 , 55);
        this.ctx.lineTo(76 , 80);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.fillStyle = "grey"; //Driveway
        this.ctx.beginPath();
        this.ctx.moveTo(76 , 80);
        this.ctx.lineTo(118, 98);
        this.ctx.lineTo(2, 98);
        this.ctx.lineTo(44, 80);
        for(let i = 0; i < 23; i++) {
            this.ctx.fillRect(2 + (i*5), 98, 3, 1);
        }
        this.ctx.fill();
    }

    addHouse(parentCtx, x, y) {
        parentCtx.drawImage(this.canvas, x, y, this.width, this.height);
    }
}

export default House;
