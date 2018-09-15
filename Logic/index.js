import WhiteBox from "../Render/Components/WhiteBox.js";
import Menu from "./Menu.js";

class Logic {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.CanvHandlers = canvHandlers;
        this.level = "Level0";
        this.editMode = false;
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
                } else {
                    switch(msg.keyCode) {
                        case 39:
                        player.direction = 1;
                        break;
                        case 37:
                        player.direction = -1;
                        break;
                        case 38:
                        if(!player.physics.velocityY) player.physics.velocityY = player.jump * -1;
                        break;
                    }
                }
                break;
            case "keyup":
                if(!this.editMode) {
                    switch(msg.keyCode) {
                        case 39:
                        player.direction = 0;
                        break;
                        case 37:
                        player.direction = 0;
                        break;
                    }
                }
                break;
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
    "keyup",
    "input"
];

export default Logic;
