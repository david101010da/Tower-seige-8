class Box{
    constructor(x, y, width, height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Box.png");
    this.visibility = 255;
    World.add(world, this.body);

      }

      display(){
        if(this.body.speed < 5){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER)
          image(this.image,0,0,this.width,this.height);
           pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
          }
          box.score();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
        }

        score(){
          if(this.visibility< 0 && this.visibility > -105){
            score++;
          }
        }
        
        
      }
    
  
  

  
        
        