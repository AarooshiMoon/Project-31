class Plinko{
    constructor(x,y,RADIUS){
        var options={
            isStatic : true,
            restitution : 0.2,
            friction : 0.5,
            density : 2.2
        }
        this.body=Matter.Bodies.circle(x,y,RADIUS,options);
        this.RADIUS=RADIUS;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.RADIUS);

    }
}