import Components from "./Components/index.js";
import Data from "../Data/index.js";
import Logic from "../Logic/index.js";
import Physics from "../Logic/Physics.js";

class Render {
    constructor(selector) {
        this.canv = document.querySelector(selector);
        this.canv.width = 1200;
        this.canv.height = 600;
        this.ctx = this.canv.getContext("2d", {alpha: false});

        window.store = new Data();
        window.logic = new Logic(this.canv.width, this.canv.height);
        window.components = new Components();
        window.startTime = Date.now();
        window.ticks = Date.now() - startTime;


        for(let i = 0; i < logic.CanvHandlers.length; i++) {
            this.canv.addEventListener(logic.CanvHandlers[i], logic.EvtHandler, false)
        }

        this.loop();
    }


    loop() {
        window.ticks = Date.now() - startTime;

        if(logic.level === "Level0") {
            let tmr = 6000;
            logic.WorldViewVisible.x = Math.sin(-1 + (ticks / tmr)) * 4000 + 4000;
        }

        this.canv.width = this.canv.width;

        store.renders.map(_ => {
          if(_.type !== "static") _.generate()
        });

        let toRender = store.renders.filter(_ => { //only render visible
            if(_.level !== logic.level) return false;
            let worldX =  _.worldX;

            let vw = logic.WorldViewVisible;

            if(_.x && _.y) return true;
            let minX = _.physics.worldX || _.worldX || 0;
            let maxX = (_.physics.worldX || _.worldX) + _.width;
            let minY = _.physics.worlY || _.worldY || 0;
            let maxY = (_.physics.worldY || _.worldY) + _.height;
            let inX = maxX >= vw.x && minX <= (vw.x + vw.width);
            let inY = maxY >= vw.y && minY <= (vw.y + vw.height);

            return inX && inY;
        })

        toRender.sort((a, b) => a.order - b.order);

        let physics = new Physics(toRender);

        for(let i = 0; i < toRender.length; i++) {
            let obj = toRender[i];

            if (obj.physics.enabled) {
                physics.Process(obj);
                this.ctx.drawImage(
                    obj.canvas,
                    obj.physics.worldX - logic.WorldViewVisible.x,
                    obj.physics.worldY - logic.WorldViewVisible.y,
                    obj.width,
                    obj.height
                );
            } else {
                this.ctx.drawImage(
                    obj.canvas,
                    obj.x || obj.worldX - logic.WorldViewVisible.x,
                    obj.y || obj.worldY - logic.WorldViewVisible.y,
                    obj.width,
                    obj.height
                );
            }
        }

        let callback = this.loop.bind(this);

        requestAnimationFrame(callback);
    }
}

export default Render;
