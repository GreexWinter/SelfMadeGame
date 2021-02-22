class Rocks{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/poisonRock.png");

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
    }
}