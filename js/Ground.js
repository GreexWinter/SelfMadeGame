class Ground{
    constructor(x,y,width,height,angle){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        Matter.Body.setAngle(this.body,angle);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}