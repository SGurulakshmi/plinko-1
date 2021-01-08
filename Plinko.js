class Plinko
{
    constructor(x,y)
    {
        options={
            'restitutions':1.0,
            'isStatic':true,
            'density':0.5,
            'friction':0,
        }
        
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;

        push();
        fill("white")
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}