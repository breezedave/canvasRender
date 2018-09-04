class BlueBox {
    constructor(id, w, h) {
        this.id = id;
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.level = logic.level;
        this.width = w;
        this.height = h;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.collision = false;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, w, h);
        this.order = 2;
    };
};

export default BlueBox;
