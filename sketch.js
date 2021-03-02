var dog,sadDog,happyDog;
var button1, button2
var foodObj 


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj= new Food(500,200,15,15)
  foodObj.addImage(foodObj)
  foodObj.scale=0.05

  feed=createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("add food")
  feed.position(800,95)
  feed.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);
  
  foodObj.display()
  drawSprites();
}

function feedDog(){

  dog.addImage(happyDog)

  if(foodObj.getfoodStock()<=0){
      foodObj.updateFoodStock(foodObj.getfoodStock()*0)

}else{
  foodObj.updateFoodStock(foodObj.getfoodStock()-1)
}

}


function addFoods(){
  foods++
  databas.ref('/').update({
  
      Food:foods
  })
  }
