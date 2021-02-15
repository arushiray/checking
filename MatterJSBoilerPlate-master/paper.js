class Paper{

    constructor(x,y,radius){

        var options={

            density:1.2,
            isStatic:true
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.body.radis=radius;

        World.add(world,this.body);
    }

    display(){

        
        
        rectMode(CENTER);

        var pos=this.body.position;
        //this.body.position.x=mouseX;
        //this.body.position.y=mouseY;
    
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        pop();
        ellipse(0,0,this.body.radius);



    }


    
}