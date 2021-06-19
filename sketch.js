

var image1,imageOb
var input1,start,header1,header2
var bg;
function preload(){

    image1 = loadImage("circle-cropped.png");
    bg = loadImage("63.png")
}

function setup(){
    background("orange");
    
    createCanvas(windowWidth-200,windowHeight-50);
    imageOb = createSprite(windowWidth-800,windowHeight-500,10,10)
    imageOb.addImage(image1)
    imageOb.scale = 0.4
 
    input1 = createInput("ENTER YOUR NAME")
    input1.position(windowWidth-870,windowHeight-370)

    start = createButton("GO!")
    start.position(windowWidth-800,windowHeight-320);

    header1 = createElement("h2");
    header1.html("LOGIN HERE");
    header1.position(windowWidth-875,windowHeight-670)

    header2 = createElement("h1");
    header2.html("Cricket Auction")
    header2.position(windowWidth-1400,windowHeight-750);



}

function draw(){
    

    console.log(name);
    start.mousePressed(function(){
        var name = input1.value();
        console.log(name)
    })
    drawSprites();
}