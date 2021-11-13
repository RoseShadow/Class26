class Boat {
  constructor(x, y, width, height, boatPos) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  remove(index){
  //setTimeOut()--> execute the code after a particular time
   setTimeout(() => {
    World.remove(world,boats[index].body);
    delete boats[index];
   }, 2000);
    
  }//2

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
