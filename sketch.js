var rect1,ground,rect2,rect3,rect4,rect5,rect6,rect7, rect8, rect9, rect10, rect11;
//game of thrones castle
function setup(){
    var canvas = createCanvas(800,400);

    rect1=createSprite(200, 320, 40, 120);

    rect2=createSprite(400, 250, 400, 30);

    rect3=createSprite(600, 320, 40, 120);

    rect4=createSprite(400, 320, 400, 120);
    rect4.shapeColor="white";

    rect5=createSprite(300, 200, 40, 120);
    rect5.shapeColor="yellow";

    rect6=createSprite(300, 100, 5, 120);
    rect6.shapeColor="yellow";

    rect7=createSprite(510, 200, 40, 120);
    rect7.shapeColor="yellow";

    rect8=createSprite(510, 100, 5, 120);
    rect8.shapeColor="yellow";

    rect9=createSprite(400, 350, 50, 50);
    rect9.shapeColor="black";

    rect10=createSprite(400,200,40,100);

    rect11=createSprite(400, 100, 5, 120);
    rect11.shapeColor="lime";

    ground=createSprite(400, 380, 800, 20);
    ground.shapeColor="brown";

    triangle(300, 100, 320, 100, 310, 80);
}

function draw(){
    background(0);  

    drawSprites();
}