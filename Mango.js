class Mango{
    constructor(x,y,r){
        var options=
        {
            isStatic:true,
            restitution:0,
            friction:0.5+0.5,
            
        }
        this.image=loadImage("Plucking mangoes/mango.png")
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=50
        World.add(world,this.body)


    }
  
    display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    imageMode(CENTER);
    fill("Purple")
    image(this.image, 0,0,this.r, this.r)
    pop()
    }
    
    
}
