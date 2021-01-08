class Particle 
{
    constructor(x,y)
    {
        options ={
            'restitution' : 0.4,
        }
        this.r = 10;
        this.body= Bodies.circle(x,y,this.r,options)
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.r,this.r)
        pop();
    }
}