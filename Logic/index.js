
class Logic {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.CanvHandlers = canvHandlers;
        this.level = "Level0";
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
            shiftKey: e.shiftKey
        };

        logic.Dispatch(msg);
    }

    Dispatch(msg) {
        switch (msg.type) {
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
    "drop"
];

export default Logic;
