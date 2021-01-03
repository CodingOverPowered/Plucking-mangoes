class Stone {
    constructor(x, y,width,height) {
      var options = {
          
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.image=loadImage("Plucking mangoes/stone.png")
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width;
       this.height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     /* pos.x = mouseX;
      pos.y = mouseY;*/
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      rectMode(CENTER)

      image(this.image,0,0,60,60)
      pop();
    };
  };