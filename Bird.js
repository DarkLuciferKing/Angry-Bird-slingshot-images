class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setDensity (this.body, 5)
  }
  display() {
    super.display();
  }
}
