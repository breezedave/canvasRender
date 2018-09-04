class GreenBox {
    constructor(id, w, h) {
        this.id = id;
        this.startTick = false;
        this.level = logic.level;
        this.canvas = document.createElement("canvas");
        this.type = "dynamic";
        this.collision = false;
        this.w = w;
        this.h = h;
        this.ctx = this.canvas.getContext("2d");
    };

    generate() {
        if(!this.startTick) this.startTick = ticks;
        this.currH = parseInt(this.h / 1000 * ((ticks - this.startTick)%1000)) || 1;
        this.canvas.width = this.w;
        this.canvas.height = this.currH;
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.w, this.currH);
    }
};

export default GreenBox;
