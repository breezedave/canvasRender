import WhiteBox from "./WhiteBox.js";
import GreenBox from "./GreenBox.js";
import Level1 from "./Level1.js";
import Background1 from "./Background1.js";
import StartButton from "./StartButton.js";

class Components {
    constructor() {
        this.components = {};

        let level1 = new Level1();

        for(let i in level1.components) store.renders.push(level1.components[i]);

        var bgLevel0 = new Background1("Level0");
        for(let i = 0; i < 10; i++) {
          store.renders.push(Object.assign({}, bgLevel0.getBg(i)));
        }

        store.renders.push(Object.assign({}, new StartButton("Level0StartButton", "Level0")));

        var bgLevel1 = new Background1("Level1");
        for(let i = 0; i < 10; i++) {
          store.renders.push(Object.assign({}, bgLevel1.getBg(i)));
        }

    }

    addComponent(component) {
        this.components[component.id] = component;
    };
}


export default Components;
