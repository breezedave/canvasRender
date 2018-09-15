class Menu {
    GetButton(x, y) {
        return store.renders.filter(_ => {
           if(_.level !== logic.level) return false;
           if(_.button !== true) return false;
           return this.Overlaps(x, y, _);
       });
    }

    Overlaps(x, y, obj) {
        return x > obj.x &&
        x <= obj.x + obj.width &&
        y > obj.y &&
        y <= obj.y + obj.height;
    }
}

export default Menu;
