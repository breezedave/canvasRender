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
        window.startTime = Date.now();
        window.ticks = Date.now() - startTime;


        for(let i = 0; i < logic.CanvHandlers.length; i++) {
            this.canv.addEventListener(logic.CanvHandlers[i], logic.EvtHandler)
        }

        this.loop();
    }


    loop() {
        window.ticks = Date.now() - startTime;

        //temp//
        //logic.WorldViewVisible.x = parseInt(ticks/5);
        //end temp//

        this.canv.width = this.canv.width;

        store.renders.map(_ => {
          if(_.type !== "static") _.generate()
        });

        let toRender = store.renders.filter(_ => { //only render visible
            if(_.level !== logic.level) return false;

            let vw = logic.WorldViewVisible;
            let minX = _.worldX || _.x || 0;
            let maxX = _.worldX + _.width || _.x + _.width;
            let minY = _.worldY || _.y || 0;
            let maxY = _.worldY + _.height || _.y + _.height;
            let inX = maxX >= vw.x && minX <= (vw.x + vw.width);
            let inY = maxY >= vw.y && minY <= (vw.y + vw.height);

            return inX && inY;
        })

        toRender.sort((a, b) => a.order - b.order);

        for(let i = 0; i < toRender.length; i++) {
            let obj = toRender[i];

            this.ctx.drawImage(
                obj.canvas,
                obj.x || obj.worldX - logic.WorldViewVisible.x,
                obj.y || obj.worldY - logic.WorldViewVisible.y,
                obj.width,
                obj.height
            );
        }

        let callback = this.loop.bind(this);

        requestAnimationFrame(callback);
    }
}

export default Render;
