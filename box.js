class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibility = 255;
    //this.image = loadImage("sprites/wood1.png");
  }
  
  display(){
    console.log(this.body.speed)
 
    if((this.body.speed)<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      //image(this.image, this.body.position.x, this.body.position.y, 50,50);
      pop();
    }
 
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }

}
  