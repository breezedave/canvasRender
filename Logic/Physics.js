class Physics {
    constructor(toRender){
        if(toRender) {
            this.collidables = toRender.filter(_ => _.collision);
        }
    }

    Process(obj) {
        if(obj.physics.gravity) this.Gravity(obj);
        if(obj.physics.velocityX) this.Velocity(obj);
        obj.physics.ticks = Date.now();
        if(obj.physics.collision) this.Collision(obj);
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
        obj.physics.velocityY =  Math.min(
            obj.physics.terminalVelocity,
            obj.physics.velocityY + (1.0 * obj.physics.tickDiff / 1000 * obj.physics.gravity)
        );
        obj.physics.worldY += obj.physics.velocityY;
    }

    Velocity(obj) {
        let now = Date.now();

        if(obj.physics.ticks) {
            obj.physics.tickDiff = now - obj.physics.ticks;
        } else {
            obj.physics.tickDiff = 0;
        };
        obj.physics.worldX += (1.0 * obj.physics.tickDiff / 1000 * obj.physics.velocityX);
    }

    Collision(obj) {
        let overlaps = this.collidables.filter(_ => _.id !== obj.id && this.Overlaps(_, obj));
        if(overlaps.length === 0) return;
        let collObj = overlaps[0];
        let overlapDir = this.OverlappedDirection(obj, collObj);

        if(overlapDir.left || overlapDir.right) {
            obj.physics.velocityX = obj.physics.velocityX * -1 * obj.physics.bouncinessX;
        }

        if(overlapDir.top || overlapDir.bottom) {
            obj.physics.worldY = obj.physics.velocityY > 0 ? collObj.physics.worldY - obj.height : collObj.physics.worldY + collObj.height;
            obj.physics.velocityY = obj.physics.velocityY * -1 * obj.physics.bouncinessY;
            obj.physics.velocityX = obj.physics.velocityX * obj.physics.bouncinessX;
            obj.physics.worldY += obj.physics.velocityY

        }
    }

    Overlaps(a, b) {
        return a.physics.worldX + a.width > b.physics.worldX &&
        a.physics.worldX < b.physics.worldX + b.width &&
        a.physics.worldY + a.height > b.physics.worldY &&
        a.physics.worldY < b.physics.worldY + b.height;
    }

    OverlappedDirection(a, b) {
        return {
            top: a.physics.worldY + a.height > b.physics.worldY && a.physics.worldY < b.physics.worldY,
            left: a.physics.worldX + a.width > b.physics.worldX && a.physics.worldX < b.physics.worldX,
            bottom: a.physics.worldY + a.height > b.physics.worldY + b.height && a.physics.worldY < b.physics.worldY + b.height,
            right: a.physics.worldX + a.width > b.physics.worldX + b.width && a.physics.worldX < b.physics.worldX + b.width
        }
    }
}

export default Physics;
