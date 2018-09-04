import Components from "./Components/index.js";
import Data from "../Data/index.js";
import Logic from "../Logic/index.js";

class Render {
    constructor(selector) {
        this.canv = document.querySelector(selector);
        this.canv.width = 1600;
        this.canv.height = 600;
        this.ctx = this.canv.getContext("2d", {alpha: false});

        window.store = new Data();
        window.logic = new Logic(this.canv.width, this.canv.height);
        window.components = new Components();
        window.startTime = new Date();
        window.ticks = new Date() - startTime;


        for(let i = 0; i < logic.CanvHandlers.length; i++) {
            this.canv.addEventListener(logic.CanvHandlers[i], logic.EvtHandler)
        }

        for(let i in components.components) {
            store.renders.push(components.components[i]);
        }

        this.loop();
    }


    loop() {
        window.ticks = new Date() - startTime;

        //temp//
        logic.WorldViewVisible.x = parseInt(ticks/5);
        //end temp//

        this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);

        store.renders.map(_ => {
            if(_.type !== "static") _.generate()
        });

        store.renders.sort((a, b) => a.order - b.order);

        store.renders.filter(_ => {
            let vw = logic.WorldViewVisible;
            let minX = _.worldX || _.x;
            let maxX = _.worldX + _.canvas.width || _.x + _.canvas.width;
            let minY = _.worldY || _.y;
            let maxY = _.worldY + _.canvas.height || _.y + _.canvas.height;
            let inX = maxX >= vw.x || minX <= vw.x + vw.width;
            let inY = maxY >= vw.y || minY <= vw.y + vw.height;

            return inX && inY;
        })

        for(let i = 0; i < store.renders.length; i++) {
            let obj = store.renders[i];

            this.ctx.drawImage(
                obj.canvas,
                obj.x || obj.worldX - logic.WorldViewVisible.x,
                obj.y || obj.worldY - logic.WorldViewVisible.y,
                obj.width || obj.canvas.width,
                obj.height || obj.canvas.height
            );
        }

        let callback = this.loop.bind(this);

        requestAnimationFrame(callback);
    }
}

export default Render;
