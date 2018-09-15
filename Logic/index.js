import WhiteBox from "../Render/Components/WhiteBox.js";
import Menu from "./Menu.js";

class Logic {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.CanvHandlers = canvHandlers;
        this.level = "Level0";
        this.editMode = true;
        this.WorldViewVisible = {
            x: 0,
            y: 0,
            width: w,
            height: h
        };
    }

    EvtHandler(e) {
        let target = e.target || e.srcElement;
        let rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let msg = {
            x: x,
            y: y,
            type: e.type,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            keyCode: e.keyCode
        };

        logic.Dispatch(msg);
    }

    Dispatch(msg) {
        switch (msg.type) {
            case "click":
                if(logic.level === "Level1") {
                    let obj = new WhiteBox("ball", 8, 8);

                    obj.physics.worldX = logic.WorldViewVisible.x + msg.x;
                    obj.physics.worldY = logic.WorldViewVisible.y + msg.y;
                    store.renders.push(obj);
                } else {
                    let menu = new Menu();
                    let buttons = menu.GetButton(msg.x, msg.y);

                    if(buttons.length > 0 ) buttons[0].Action();
                }
                break;
            case "keydown":
                if(this.editMode) {
                    switch(msg.keyCode) {
                        case 39:
                        logic.WorldViewVisible.x += 5;
                        break;
                        case 37:
                        logic.WorldViewVisible.x -= 5;
                        break;
                        case 40:
                        logic.WorldViewVisible.y += 5;
                        break;
                        case 38:
                        logic.WorldViewVisible.y -= 5;
                        break;
                    }
                }
                break;
            /*
            case "mousemove":
                var comp = components.components["b"];
                var obj = Object.assign({}, comp);
                for(let i in comp) obj[i] = comp[i];

                obj.x = msg.x;
                obj.y = msg.y;
                store.renders.push(obj);
                break;
            case "click":
                var comp = components.components["g"];
                var obj = Object.assign({}, comp);

                obj.generate = comp.generate;
                obj.x = msg.x;
                obj.y = msg.y;
                store.renders.push(obj);
                break;
            */
        }
    }
};

const canvHandlers = [
    "mouseenter",
    "mouseover",
    "mousemove",
    "mousedown",
    "mouseup",
    "click",
    "auxclick",
    "dblclick",
    "contextmenu",
    "wheel",
    "mouseleave",
    "mouseout",
    "select",
    "dragstart",
    "drag",
    "dragend",
    "dragenter",
    "dragover",
    "dragleave",
    "drop",
    "keydown",
    "keypress",
    "input"
];

export default Logic;
