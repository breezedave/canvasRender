class Floor {
    constructor(id, level, x, y, w, h) {
        this.physics = {
            enabled: true,
            collision: true,
            gravity: 0
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
        this.worldX = x;
        this.worldY = y;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "black";
        this.order = 1;

        let img = new Image();
        img.src = "/Resources/floor.jpg";

        var self = this;
        img.onload = function() {
            self.ctx.drawImage(img, 0, 0, w, h, 0, 0, w, h);
        }
    };
};

export default Floor;
