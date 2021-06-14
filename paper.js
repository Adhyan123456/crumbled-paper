class page{

constructor(x,y,r){
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:0.15
}

this.image=loadImage("paper.png");
this.body=Bodies.circle(x,y,r,options);
this.x=x;
this.y=y;
this.r=r;

World.add(world,this.body);

}


display(){

var pagePose=this.body.position;
var angle = this.body.angle;

push ()
translate (pagePose.x,pagePose.y);
ellipseMode(RADIANS);
rotate (angle);

imageMode (CENTER);
image( this.image,0,0,-this.paperRadius/2,this.paperRadius);
pop ()












}




























}









































