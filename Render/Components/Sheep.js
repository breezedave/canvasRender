class Sheep {
    constructor() {
        let canv = document.createElement("canvas");
        let ctx = canv.getContext("2d");

        canv.width = 22;
        canv.height = 18;
        ctx.fillStyle = "rgb(250, 255, 245)";
        ctx.fillRect(0, 2, 8, 4);
        ctx.fillRect(2, 0, 4, 8);

        ctx.fillRect(4, 5, 12, 6);
        ctx.fillRect(7, 2, 6, 12);

        ctx.fillRect(10, 5, 12, 6);
        ctx.fillRect(14, 2, 6, 12);

        ctx.fillStyle = "rgb(96, 80, 66)";
        ctx.fillRect(9, 14, 2, 4);
        ctx.fillRect(15, 14, 2, 4);

        ctx.fillStyle = "rgb(125, 125, 125)";
        ctx.fillRect(2, 2, 2, 2);

        ctx.fillStyle = "rgb(215, 225, 235)";
        ctx.fillRect(14, 2, 1, 3);

        this.canvas = canv;
        this.ctx = ctx;
        this.width = canv.width;
        this.height = canv.height;

    }

    addSheep(parentCtx, x, y) {
        parentCtx.drawImage(this.canvas, x, y, this.width, this.height);
    }
}

export default Sheep;
