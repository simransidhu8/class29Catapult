class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
        
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push();
            stroke(48,22,8);
            if(posA.x < 220){
              strokeWeight(7);
              line(posA.x-20, posA.y, posB.x-10, posB.y);
              line(posA.x-20, posA.y, posB.x+30, posB.y-3);
              image(this.image3, posA.x-30, posA.y, 15, 30);
            } else {
                line(posA.x+25, posA.y, posB.x-10, posB.y);
                line(posA.x+25, posA.y, posB.x+30, posB.y-3);
                image(this.image3, posA.x+25, posA.y, 15, 30);
            }
            
            pop();
        }
    }
    
}