class Bird  {
    constructor(x,y,width,height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.polygon = Bodies.rectangle(x,y,width,height,options);
    this.height = height;
    this.width = width;
    this.image = loadImage("Bird.png");
    World.add(world, this.polygon);

    }
  
    display() {
      var angle = this.polygon.angle;
      push();
      translate(this.polygon.position.x, this.polygon.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
};

