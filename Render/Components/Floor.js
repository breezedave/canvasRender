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

        this.ctx.fillRect(0, 0, w, h);
    };
};

export default Floor;
