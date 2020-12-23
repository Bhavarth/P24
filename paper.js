class Paper{
constructor(x,y,r){

    var options = {
        isStatic: false,
        restitution: 1,
        friction:1,
        density:1.2
    }
    this.body= Bodies.circle(x,y,r,options)
    this.x= x;
    this.y = y;
    this.r= r;
    World.add(world,this.body)
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
    
}
}