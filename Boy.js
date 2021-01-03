class Boy{
    constructor(x,y,width,height){
        var options={
        isStatic:true
        }
        this.image=loadImage("Plucking mangoes/boy.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.height=height;
        this.width=width;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
     push()
     translate(pos.x,pos.y)
     imageMode(CENTER)
     rectMode(CENTER)
     fill("orange")
     image(this.image,0,0,this.width,this.height)
     pop()
    }
}