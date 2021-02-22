class Player{
    constructor(x,y){
        var options = {
            'restituition' : 0.5,
            'friction' : 1,
            'density' : 0.5,
            'isStatic' : false
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.x = x;
        this.y = y;
        this.image = loadImage("images/glitterSlime1.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}