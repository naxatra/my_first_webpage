var ball = []

function setup() 
{

can = createCanvas(windowWidth, windowHeight);
can.position(0, 0);
can.style('z-index', -1);

    for(i=0; i<=100; i++){
      ball[i] = new Ball;
    }
    c =Math.round(Math.random()); 
}

function draw() 
 { 
   if(c) background(random(0,255),random(0, 255), random(0, 255))

  for(i=0; i<=100; i++){
    ball[i].disp();
    ball[i].move();
  }
 }


class Ball
{
   constructor(){
      this.x=random(0,width);
      this.y=height;
      this.r=random(10,99);
   this.speed=random(1,25);
   this.clrR=random(0,255);
   this.clrG=random(0,255);
   this.clrB=random(0,255);
   
    }
    
  
  disp()
  {
   
      stroke(this.clrR,this.clrG,this.clrB)
  strokeWeight(10);
    ellipse(this.x,this.y,this.r,this.r);
  }
  
 move()
  {
      this.y=this.y-this.speed;
  }
}