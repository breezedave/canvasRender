class StartButton {
    constructor(id, level) {
        this.physics = {};
        this.x = 500;
        this.y = 250;
        this.width = 200;
        this.height = 100;
        this.id = id;
        this.level = level;
        this.canvas = document.createElement("canvas");
        this.type = "static";
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
        this.order = 2;
        this.button = true;
        this.Action = function() {
            logic.WorldViewVisible.x = 2000;
            logic.level = "Level1";
        };

        this.Render();
        return this;
    };


    Render() {
        this.color1 = "rgb(220, 170, 10)";
        this.color2 = "rgb(200, 150, 10)";
        this.color3 = "rgb(150, 150, 150, 0.5)";
        this.color4 = "rgb(255, 255, 255)";

        this.ctx.fillStyle = this.color1;
        this.ctx.fillRect(10, 0, this.width - 20, this.height);
        this.ctx.fillRect(0, 10, this.width, this.height - 20);
        this.ctx.fillStyle = this.color2;
        this.ctx.fillRect(15, 5, this.width - 30, this.height - 10);
        this.ctx.fillRect(5, 15, this.width - 10, this.height - 30);

        this.ctx.fillStyle = this.color3;
        //Shadow
        //S
        this.ctx.fillRect(29, 32, 25, 10);
        this.ctx.fillRect(29 ,42, 5 , 7 );
        this.ctx.fillRect(29, 49, 25, 6 );
        this.ctx.fillRect(49 ,55, 5 , 7 );
        this.ctx.fillRect(29, 62, 25, 10);
        //T
        this.ctx.fillRect(59, 32, 25, 10);
        this.ctx.fillRect(66, 42, 10, 30);
        //A
        this.ctx.fillRect(89, 38, 6, 34);
        this.ctx.fillRect(95, 32, 13, 6);
        this.ctx.fillRect(95, 52, 13, 10);
        this.ctx.fillRect(108, 38, 6, 34);
        //R
        this.ctx.fillRect(119, 38, 6 , 34);
        this.ctx.fillRect(119, 32, 18, 6 );
        this.ctx.fillRect(125, 50, 13, 6 );
        this.ctx.fillRect(138, 38, 6 , 12);
        this.ctx.fillRect(135, 56, 6 , 8 );
        this.ctx.fillRect(138, 64, 6 , 8 );
        //T
        this.ctx.fillRect(149, 32, 25, 10);
        this.ctx.fillRect(156, 42, 10, 30);

        this.ctx.fillStyle = this.color4;
        //S
        this.ctx.fillRect(27, 30, 25, 10);
        this.ctx.fillRect(27 , 40, 5, 7 );
        this.ctx.fillRect(27, 47, 25, 6 );
        this.ctx.fillRect(47 , 53, 5, 7 );
        this.ctx.fillRect(27, 60, 25, 10);
        //T
        this.ctx.fillRect(57, 30, 25, 10);
        this.ctx.fillRect(64, 40, 10, 30);
        //A
        this.ctx.fillRect(87, 36, 6, 34);
        this.ctx.fillRect(93, 30, 13, 6);
        this.ctx.fillRect(93, 50, 13, 10);
        this.ctx.fillRect(106, 36, 6, 34);
        //R
        this.ctx.fillRect(117, 36, 6 , 34);
        this.ctx.fillRect(117, 30, 18, 6 );
        this.ctx.fillRect(123, 48, 13, 6 );
        this.ctx.fillRect(136, 36, 6 , 12);
        this.ctx.fillRect(133, 54, 6 , 8 );
        this.ctx.fillRect(136, 62, 6 , 8 );
        //T
        this.ctx.fillRect(147, 30, 25, 10);
        this.ctx.fillRect(154, 40, 10, 30);
    }
};

export default StartButton;
