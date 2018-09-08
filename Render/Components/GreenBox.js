class GreenBox {
    constructor(id, w, h) {
        this.physics = {
            enabled: true,
            collision: false,
            gravity: 0
        };

        this.id = id;
        this.startTick = false;
        this.level = logic.level;
        this.canvas = document.createElement("canvas");
        this.type = "dynamic";
        this.collision = false;
        this.width = w;
        this.height = h;
        this.ctx = this.canvas.getContext("2d");
        this.order = 3;
    };

    generate() {
        if(!this.startTick) this.startTick = ticks;
        this.currH = parseInt(this.height / 1000 * ((ticks - this.startTick)%1000)) || 1;
        this.canvas.width = this.width;
        this.canvas.height = this.currH;
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.width, this.currH);
    }
};

export default GreenBox;
