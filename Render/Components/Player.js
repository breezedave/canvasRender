class Player {
    constructor(id, level, x, y) {
        this.physics = {
            enabled: true,
            collision: true,
            gravity: 9.8,
            terminalVelocity: 12,
            velocityY: 0, //going up
            bouncinessY: 0, //perc of energy passed back in to the bounce
            velocityX: 0,
            bouncinessX: 1,
            worldX: x,
            worldY: y
        };
        this.width = 22;
        this.height = 80;
        this.id = id;
        this.level = level;
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
        this.order = 3;
        this.speed = 120;
        this.jump = 6.5;

        this.Render();
        window.player = this;
        return this;
    };


    Render() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(6, 48, 6, 32);
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(9, 48, 6, 32);
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 16, 22, 32);
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(4, 0 , 14, 14);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(8, 22, 6, 20);

    }
};

export default Player;
