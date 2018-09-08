class Physics {
    constructor(){}

    Overlaps(a, b) {
        return a.x + a.width > b.x &&
        a.x < b.x + b.width &&
        a.y + a.height > b.y &&
        a.y < b.y + b.height;
    }

    Process(obj) {
        if(obj.physics.gravity) this.Gravity(obj);
    }

    Gravity(obj) {
        let now = Date.now();

        if(typeof obj.physics.velocityY === "undefined") obj.physics.velocityY = 0;
        if(typeof obj.physics.terminalVelocity === "undefined") obj.physics.terminalVelocity = -1000;
        if(obj.physics.ticks) {
            obj.physics.tickDiff = now - obj.physics.ticks;
        } else {
            obj.physics.tickDiff = 0;
        };
        obj.physics.ticks = now;
        obj.physics.velocityY =  Math.min(
            obj.physics.terminalVelocity,
            obj.physics.velocityY + (1.0 * obj.physics.tickDiff / 1000 * obj.physics.gravity)
        );
        obj.physics.worldY += obj.physics.velocityY;
    }

}

export default Physics;
