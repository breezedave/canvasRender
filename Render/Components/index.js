import BlueBox from "./BlueBox.js";
import GreenBox from "./GreenBox.js";
import Level1 from "./Level1.js";
import Background1 from "./Background1.js";

class Components {
    constructor() {
        this.components = {};
    
        let level1 = new Level1();

        for(let i in level1.components) store.renders.push(level1.components[i]);

        var bg1 = new Background1();
        for(let i = 0; i < 100; i++) {
          store.renders.push(Object.assign({}, bg1.getBg(i)));
        }

    }

    addComponent(component) {
        this.components[component.id] = component;
    };
}


export default Components;
