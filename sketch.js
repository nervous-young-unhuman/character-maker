//Alba Zalli
//Character Maker
//Dec 28 2023

let downloadButtonPressed = false;
//coordinates to draw chosen images to canvas
let cornerImgCoordinate=50;
let xImgCoordinate = 400;
let yImgCoordinate= 300;
//tracks if clear options button is pressed
let buttonPressed = false;
let xButton, yButton, buttonWidth, buttonHeight;
let buttonDrawn = false;
let sidebarWidth = 110; //stores width of sidebar
let circleX = 450; //stores starting x coordinate of circles drawn later
let circleRadius = 25; //stores radius of same circle
let sidebarVisible = false;
let buttonStates = [false, false, false, false, false, false, false];
let options; // Declare the options object as a global variable
let rectangles = []; // Array to store rectangle positions and sizes
//store variables for triangle selector
let x1 = 7;
let x2 = 52;
let x3 = 97;
let imagesBackground = []; //array to store the background images
let imagesBodies = []; //array to store bodies images
let imagesTshirt= []; //array to store images t shirts
let imagesNoses= []; //array to store images of noses
let imagesEyes= []; //array to store images of eyes
let imagesMouths = []; //array to store images of mouths
let imagesHairLines = []; //array to store different hair outlines
let imagesAccessories = []; //array to store different accessories
let circleColour = []; //create array for circle colour menu
//create array to store blond hair
let imagesBlondhair = [];
//create array to store brown hair
let imagesBrownhair = [];
//create array to store dark brown hair
let imagesDarkBrownhair = [];
//create array to store black hair
let imagesBlackhair = [];
//create array to store pink hair
let imagesPinkhair = [];
//create array to store white hair
let imagesWhitehair = [];
//create array to store blue hair
let imagesBluehair = [];
//create array to store selected accessories
let chosenAccessoriesToDraw = [];
circleColour.push("#ac8176"); //add colours circle colour array
circleColour.push("#724b40");
circleColour.push("#46261c");
circleColour.push("#1c0201");
circleColour.push("#853a50");
circleColour.push("#cab3b7");
circleColour.push("#6a68a9");
let imageIndex=0; //declare index for images
let menuButtonSelected; //tracks which menu button is selected
let offscreenScroll=0; //detects how many times the arrow moves offscreen
//variable to store selected square index
let selectedSquareIndexBck=13;  
let selectedColourIndex=0;

let thisButton;

function setupInitialSquareIndex() { //set up initial square index to be randomly generated and create a random character on setup
  selectedSquareIndexBodies = floor(random(1, imagesBodies.length + 1));
  selectedSquareIndexTshirt = floor(random(1, imagesTshirt.length + 1));
  selectedSquareIndexNoses = floor(random(1, imagesNoses.length + 1));
  selectedSquareIndexEyes = floor(random(1, imagesEyes.length));
  selectedSquareIndexMouth = floor(random(1, imagesMouths.length + 1));
  selectedSquareIndexHairline = floor(random(1,imagesHairLines.length + 1));
  selectedAccessories = floor(random(1,imagesAccessories.length + 1));
  selectedBlondHairIndex=selectedSquareIndexHairline;    
  selectedBrownHairIndex=selectedSquareIndexHairline; 
  selectedDarkBrownHairIndex = selectedSquareIndexHairline;
  selectedBlackHairIndex = selectedSquareIndexHairline;
  selectedWhiteHairIndex = selectedSquareIndexHairline;
  selectedPinkHairIndex = selectedSquareIndexHairline;
  selectedBlueHairIndex = selectedSquareIndexHairline;
}

function setup() {
  createCanvas(500, 500);
  options = new Options(); //initialize the options object
  setupInitialSquareIndex();
}


function clearButtonPressed() { //triggered if clear button is pressed
  chosenAccessoriesToDraw = [];
}

function preload() { 
  //load each background image into a variable then add this variable into the imagesBackground array
  imagesBackground.push(loadImage("background/000.png"));
  imagesBackground.push(loadImage("background/001.png"));
  imagesBackground.push(loadImage("background/002.png"));
  imagesBackground.push(loadImage("background/005.png"));
  imagesBackground.push(loadImage("background/012.png"));
  imagesBackground.push(loadImage("background/006.png"));
  imagesBackground.push(loadImage("background/007.png"));
  imagesBackground.push(loadImage("background/008.png"));
  imagesBackground.push(loadImage("background/009.png"));
  imagesBackground.push(loadImage("background/010.png"));
  imagesBackground.push(loadImage("background/011.png"));
  imagesBackground.push(loadImage("background/013.png"));
  imagesBackground.push(loadImage("background/004.png"));
  imagesBackground.push(loadImage("background/003.png"));
  imagesBackground.push(loadImage("background/014.png"));
  //load each body image into a variable then add this variable into the imagesBodies array
  for (let i = 0; i <= 4; i++) {
    let imageName = "bodies/" + nf(i, 3) + ".png";
    imagesBodies.push(loadImage(imageName));
  }
  //load each tshirt image into a variable then add this variable into the imagesTshirt array
  for (let i = 0; i <= 9; i++) {
    let imageName = "shirt/" + nf(i, 3) + ".png";
    imagesTshirt.push(loadImage(imageName));
  }
  //load each nose image into a variable then add this variable into the imagesNoses array
  for (let i = 0; i <= 4; i++) {
    let imageName = "noses/" + nf(i, 3) + ".png";
    imagesNoses.push(loadImage(imageName));
  }
  //load each eye image  into  imagesEyes array
   imagesEyes.push(loadImage("eyes/001.png"));
  imagesEyes.push(loadImage("eyes/002.png"));
  imagesEyes.push(loadImage("eyes/003.png"));
  imagesEyes.push(loadImage("eyes/004.png"));
  imagesEyes.push(loadImage("eyes/005.png"));
  imagesEyes.push(loadImage("eyes/006.png"));
  imagesEyes.push(loadImage("eyes/007.png"));
  imagesEyes.push(loadImage("eyes/008.png"));
  imagesEyes.push(loadImage("eyes/009.png"));
  imagesEyes.push(loadImage("eyes/010.png"));
  imagesEyes.push(loadImage("eyes/000.png"));
  //load each mouth image into the mouth image array
  for (let i = 0; i < 10; i++) {
    let imageName = "mouths/" + nf(i, 3) + ".png";
    imagesMouths.push(loadImage(imageName));
  }
  //load each hair outline image into the hair outline array
   for (let i = 0; i < 10; i++) {
    let imageName = "hair lines/" + nf(i, 3) + ".png";
    imagesHairLines.push(loadImage(imageName));
  }
  //load images into the blond hair array
 for (let i = 0; i < 10; i++) {
  let imageName = "blond hair/" + nf(i, 3) + ".png";
  imagesBlondhair.push(loadImage(imageName));
}
  //load images in the brown hair array
  for (let i = 0; i < 10; i++) {
    let imageName = "brwn hair/" + nf(i, 3) + ".png";
    imagesBrownhair.push(loadImage(imageName));
  }
  //load images in the dark brown hair array
  for (let i = 0; i < 10; i++) {
    let imageName = "dark brown hair/" + nf(i, 3) + ".png";
    imagesDarkBrownhair.push(loadImage(imageName));
}
  //load images for black hair array
  for (let i = 0; i < 10; i++) {
  let imageName = "black hair/" + nf(i, 3) + ".png";
  imagesBlackhair.push(loadImage(imageName));
}
  //load images for pink hair array
  for (let i = 0; i < 10; i++) {
  let imageName = "pink hair/" + nf(i, 3) + ".png";
  imagesPinkhair.push(loadImage(imageName));
}
  //load images for white hair array
  for (let i = 0; i < 10; i++) {
  let imageName = "white hair/" + nf(i, 3) + ".png";
  imagesWhitehair.push(loadImage(imageName));
}
  //load images for blue hair array
  for (let i = 0; i < 10; i++) {
  let imageName = "blue hair/" + nf(i, 3) + ".png";
  imagesBluehair.push(loadImage(imageName));
}
  //load images for acessories array
  for (let i = 0; i < 20; i++) {
  let imageName = "accessories/" + nf(i, 3) + ".png";
  imagesAccessories.push(loadImage(imageName));
}
}

class Options {
  constructor() {
    this.contents = {
      "Bodies": 5,
      "Hair": 10,
      "Eyes": 11,
      "Noses": 5,
      "Mouths": 10,
      "T Shirts": 10,
      "Accessories": 10,
      "Background": 15
    };
    this.items = ["Bodies", "Hair", "Eyes", "Noses", "Mouths", "T Shirts", "Accessories", "Background", "Done"];
    this.buttons = [];
  }
}

function sideBar() {
  // Check if the mouse is on the left side of the screen
  if (mouseX < sidebarWidth) {
    sidebarVisible = true;
  } else {
    sidebarVisible = false;
  }
  if (sidebarVisible && menuButtonSelected!=="Done") {
    fill(231, 84, 128);
    rect(0, 0, sidebarWidth, height); //adjust size of the sidebar
    //draw 9 buttons on the side bar
    fill(255);
    textSize(12);
    for (let i = 0; i < 9; i++) {
      let x = 7;
      let y = 20 + i * 52; // Adjust the spacing
      let squareText = options.items[i];
      let isPressed = buttonStates[i];
      let button = createButton(squareText);
      button.position(x, y);
      button.style('background-color', 'pink');
      button.style('font-family', 'Times New Roman');
      button.size(90, 30);
      button.style('font-size', '15px');
      button.mousePressed(() => handleButtonPress(squareText)); // Assign a callback function
      options.buttons.push(button); // Store the button in the options object
    }
  } else {
    for (let i = 0; i < options.buttons.length; i++) {
      options.buttons[i].hide();
    }
  }
}

function handleButtonPress(item) {
  // Store rectangle positions and sizes in the array
  rectangles = [];
  for (let i = 0; i < options.contents[item]; i++) {
    let x = 7 + i * 100; // Adjust spacing between rectangles
    let y = 380; // Adjust the vertical position
    rectangles.push({ x: x, y: y, width: 85, height: 85 });
  }
  menuButtonSelected= item;
}

//use arrow keys to select through squares at bottom, select specific squares that have drawings of specific options in each of them
function squareSelector() {
  fill(231, 84, 128);
  triangle(x1, 360, x2, 390, x3, 360);
}

function drawRectangles(){ //draws rectangle and image options at bottom of screen
  imageIndex=0;
  //draw amount of rectangles stored in the array
  for (let i = 0; i < rectangles.length; i++) {
    fill(200);
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    
    //draw the background images overtop each rectangle
    if (i === imageIndex && menuButtonSelected==="Background") {
      image(imagesBackground[i], rectangles[i].x, rectangles[i].y, 90, 90);
    }
    //draw the body images overtop each rectangle
    if (i === imageIndex && menuButtonSelected==="Bodies") {
      image(imagesBodies[i], rectangles[i].x-20, rectangles[i].y, 120, 90);
    }
    //draw the t shirt images overtop each rectangle
    if (i === imageIndex && menuButtonSelected === "T Shirts") {
  image(imagesTshirt[i], rectangles[i].x, rectangles[i].y, 90, 90);
    }
    //draw the nose images overtop each rectangle
    if (i === imageIndex && menuButtonSelected === "Noses") {
  image(imagesNoses[i], rectangles[i].x-120, rectangles[i].y-50, 260, 300);
    }
    //draw the eyes images overtop each rectangle
    if (i === imageIndex && menuButtonSelected === "Eyes") {
  image(imagesEyes[i], rectangles[i].x-120, rectangles[i].y-50, 260, 300);
    }
    //draw the mouth images overtop each rectangle
    if (i === imageIndex && menuButtonSelected === "Mouths") {
  image(imagesMouths[i], rectangles[i].x-120, rectangles[i].y-100, 260, 300);
    }
    
    //draw the hair colour if it is blond
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex==0){
    image(imagesBlondhair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
    }
    //draw the hair colour if it is brown
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex==1){
    image(imagesBrownhair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
    }
    // draw the dark brown hair if it is selected
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex === 2) {
      image(imagesDarkBrownhair[i], rectangles[i].x - 30, rectangles[i].y, 140, 140);
    }
    // draw the hair colour if it is black
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex == 3) {
      image(imagesBlackhair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
}
    // draw pink hair if it is selected
if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex == 4) {
  image(imagesPinkhair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
}
    //draw white hair if selected
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex === 5) {
  image(imagesWhitehair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
}
    //draw blue hair if selected
    if (i === imageIndex && menuButtonSelected === "Hair" && selectedColourIndex === 6) {
  image(imagesBluehair[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
}
    //draw the hair lines images overtop each colour
  if (i === imageIndex && menuButtonSelected === "Hair") {
  image(imagesHairLines[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
    //draw the acessories 
 if (i === imageIndex && menuButtonSelected === "Accessories") {
  image(imagesAccessories[i], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
    imageIndex++;
    
    //HANDLE OFFSCREEN SCROLL
    //if offscreen scroll is more than zero draw index of images that is equal to offscreen scroll * 5 plus the images background
    if (offscreenScroll>0 && menuButtonSelected==="Background"){
      let newIndex = i + (offscreenScroll * 5);
      if (newIndex < imagesBackground.length) {
      image(imagesBackground[newIndex], rectangles[i].x, rectangles[i].y, 90, 90);
      }
  }
      //if offscreen scroll is more than zero draw index of images that is equal to offscreen scroll * 5 plus the images t shirt
    if (offscreenScroll>0 && menuButtonSelected==="T Shirts"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesTshirt.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesTshirt[newIndex], rectangles[i].x, rectangles[i].y, 90, 90);}}
    
    //if offscreen scroll is more than zero draw index of images that is equal to offscreen scroll * 5 plus the images eyes
    if (offscreenScroll>0 && menuButtonSelected==="Eyes"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesEyes.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesEyes[newIndex], rectangles[i].x-120, rectangles[i].y-50, 260, 300);}}
  
   //if offscreen scroll is more than zero draw index of images that is equal to offscreen scroll * 5 plus the images mouths
    if (offscreenScroll>0 && menuButtonSelected==="Mouths"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesMouths.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesMouths[newIndex], rectangles[i].x-120, rectangles[i].y-100, 260, 300);}}
  
    //draw blond hair scroll
    if (selectedColourIndex === 0 && offscreenScroll>0 && menuButtonSelected==="Hair"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesHairLines.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesBlondhair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);    
    }}
    //draw brown hair scroll
    if (selectedColourIndex === 1 && offscreenScroll>0 && menuButtonSelected==="Hair"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesHairLines.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesBrownhair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);    
    }}
    //draw dark brown hair scroll
    if (selectedColourIndex === 2 && offscreenScroll>0 && menuButtonSelected==="Hair"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesHairLines.length) {
      rect(rectangles[i].x, rectangles[i].y, 90, 90);
      image(imagesDarkBrownhair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);    
    }}
    //draw black hair scroll
    if (selectedColourIndex === 3 && offscreenScroll > 0 && menuButtonSelected === "Hair") {
  let newIndex = i + (offscreenScroll * 5);
  if (newIndex < imagesBlackhair.length) {
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    image(imagesBlackhair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
}
    //draw pink hair scroll
    if (selectedColourIndex === 4 && offscreenScroll > 0 && menuButtonSelected === "Hair") {
  let newIndex = i + (offscreenScroll * 5);
  if (newIndex < imagesPinkhair.length) {
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    image(imagesPinkhair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
}
    //draw white hair scroll
    if (selectedColourIndex === 5 && offscreenScroll > 0 && menuButtonSelected === "Hair") {
  let newIndex = i + (offscreenScroll * 5);
  if (newIndex < imagesWhitehair.length) {
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    image(imagesWhitehair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
}
    //draw blue hair scroll 
    if (selectedColourIndex === 6 && offscreenScroll > 0 && menuButtonSelected === "Hair") {
  let newIndex = i + (offscreenScroll * 5);
  if (newIndex < imagesBluehair.length) {
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    image(imagesBluehair[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
}
    //draw acesssories scroll
     if (offscreenScroll > 0 && menuButtonSelected === "Accessories") {
  let newIndex = i + (offscreenScroll * 5);
  if (newIndex < imagesAccessories.length) {
    rect(rectangles[i].x, rectangles[i].y, 90, 90);
    image(imagesAccessories[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);
  }
}
    //if offscreen scroll is more than zero draw index of images that is equal to offscreen scroll * 5 plus the images hair
    if (offscreenScroll>0 && menuButtonSelected==="Hair"){
      let newIndex = i + (offscreenScroll*5);
      if (newIndex < imagesHairLines.length) {
      image(imagesHairLines[newIndex], rectangles[i].x-30, rectangles[i].y, 140, 140);}}
}}

function keyPressed() {
  //move the selector triangle based on key selection
  if (keyCode === RIGHT_ARROW) {
    x1 += 100;
    x2 += 100;
    x3 += 100;
  } else if (keyCode === LEFT_ARROW) {
    x1 -= 100;
    x2 -= 100;
    x3 -= 100;
  }
  //select a specific image element based on position of arrow and enter key interaction if the background image is chosen
  if (keyCode === ENTER && menuButtonSelected==="Background"){
    if (x2==52){ //find square index based off of arrow position
      selectedSquareIndexBck=1 + (offscreenScroll*5);
    }
    else if(x2==152){
      selectedSquareIndexBck=2+ (offscreenScroll*5);
      }
    else if(x2==252){
      selectedSquareIndexBck=3+ (offscreenScroll*5);
    }
    else if(x2==352){
      selectedSquareIndexBck=4+ (offscreenScroll*5);
    }
    else if(x2==452){
      selectedSquareIndexBck=5+ (offscreenScroll*5);
    }
  }
  //select a specific image element based on position of arrow and enter key interaction if the bodies image is chosen 
  if (keyCode === ENTER && menuButtonSelected==="Bodies"){
    if (x2==52){ //find square index based off of arrow position
      selectedSquareIndexBodies=1;
    }
    else if(x2==152){
      selectedSquareIndexBodies=2;
      }
    else if(x2==252){
      selectedSquareIndexBodies=3;
    }
    else if(x2==352){
      selectedSquareIndexBodies=4;
    }
    else if(x2==452){
      selectedSquareIndexBodies=5;
    }
  }
  //picks nose based off of selector coordinates
  if (keyCode === ENTER && menuButtonSelected==="Noses"){
    if (x2==52){ //find square index based off of arrow position
      selectedSquareIndexNoses=1;
    }
    else if(x2==152){
      selectedSquareIndexNoses=2;
      }
    else if(x2==252){
      selectedSquareIndexNoses=3;
    }
    else if(x2==352){
      selectedSquareIndexNoses=4;
    }
    else if(x2==452){
      selectedSquareIndexNoses=5;
    }
  }
   //chooses eyes from menu with selector
    if (keyCode === ENTER && menuButtonSelected === "Eyes") {
      if (x2 == 52) {
        selectedSquareIndexEyes = 1 + (offscreenScroll * 5);
      } else if (x2 == 152) {
        selectedSquareIndexEyes = 2 + (offscreenScroll * 5);
      } else if (x2 == 252) {
        selectedSquareIndexEyes = 3 + (offscreenScroll * 5);
      } else if (x2 == 352) {
        selectedSquareIndexEyes = 4 + (offscreenScroll * 5);
      } else if (x2 == 452) {
        selectedSquareIndexEyes = 5 + (offscreenScroll * 5);
      }
    }
  //chooses mouth from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "Mouths") {
    if (x2 == 52) {
      selectedSquareIndexMouth = 1 + (offscreenScroll * 5);
    } else if (x2 == 152) {
      selectedSquareIndexMouth = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedSquareIndexMouth = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedSquareIndexMouth = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedSquareIndexMouth = 5 + (offscreenScroll * 5);
    }}
  //chooses t shirt from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "T Shirts") {
    if (x2 == 52) {
      selectedSquareIndexTshirt = 1 + (offscreenScroll * 5);
    } else if (x2 == 152) {
      selectedSquareIndexTshirt = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedSquareIndexTshirt = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedSquareIndexTshirt = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedSquareIndexTshirt = 5 + (offscreenScroll * 5);
    }}
  //chooses hair outline from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "Hair") {
    if (x2 == 52) {
      selectedSquareIndexHairline = 1 + (offscreenScroll * 5);
     } else if (x2 == 152) {
      selectedSquareIndexHairline = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedSquareIndexHairline = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedSquareIndexHairline = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedSquareIndexHairline = 5 + (offscreenScroll * 5);
    }}
  //chooses blond hair from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 0 ) {
    if (x2 == 52) {
    selectedBlondHairIndex = 1 + (offscreenScroll * 5);
    } else if (x2 == 152) {
      selectedBlondHairIndex = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedBlondHairIndex = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedBlondHairIndex = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedBlondHairIndex = 5 + (offscreenScroll * 5);
    }}
  //chooses brown hair from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 1 ) {
    if (x2 == 52) {
    selectedBrownHairIndex = 1 + (offscreenScroll * 5);
    } else if (x2 == 152) {
      selectedBrownHairIndex = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedBrownHairIndex = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedBrownHairIndex = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedBrownHairIndex = 5 + (offscreenScroll * 5);
    }}
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 2) {
    if (x2 == 52) {
      selectedDarkBrownHairIndex = 1 + (offscreenScroll * 5);
    } else if (x2 == 152) {
      selectedDarkBrownHairIndex = 2 + (offscreenScroll * 5);
    } else if (x2 == 252) {
      selectedDarkBrownHairIndex = 3 + (offscreenScroll * 5);
    } else if (x2 == 352) {
      selectedDarkBrownHairIndex = 4 + (offscreenScroll * 5);
    } else if (x2 == 452) {
      selectedDarkBrownHairIndex = 5 + (offscreenScroll * 5);
    }
  }
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 3) {
  if (x2 == 52) {
    selectedBlackHairIndex = 1 + (offscreenScroll * 5);
  } else if (x2 == 152) {
    selectedBlackHairIndex = 2 + (offscreenScroll * 5);
  } else if (x2 == 252) {
    selectedBlackHairIndex = 3 + (offscreenScroll * 5);
  } else if (x2 == 352) {
    selectedBlackHairIndex = 4 + (offscreenScroll * 5);
  } else if (x2 == 452) {
    selectedBlackHairIndex = 5 + (offscreenScroll * 5);
  }
}
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 4) {
  if (x2 == 52) {
    selectedPinkHairIndex = 1 + (offscreenScroll * 5);
  } else if (x2 == 152) {
    selectedPinkHairIndex = 2 + (offscreenScroll * 5);
  } else if (x2 == 252) {
    selectedPinkHairIndex = 3 + (offscreenScroll * 5);
  } else if (x2 == 352) {
    selectedPinkHairIndex = 4 + (offscreenScroll * 5);
  } else if (x2 == 452) {
    selectedPinkHairIndex = 5 + (offscreenScroll * 5);
  }
}
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 5) {
  if (x2 == 52) {
    selectedWhiteHairIndex = 1 + (offscreenScroll * 5);
  } else if (x2 == 152) {
    selectedWhiteHairIndex = 2 + (offscreenScroll * 5);
  } else if (x2 == 252) {
    selectedWhiteHairIndex = 3 + (offscreenScroll * 5);
  } else if (x2 == 352) {
    selectedWhiteHairIndex = 4 + (offscreenScroll * 5);
  } else if (x2 == 452) {
    selectedWhiteHairIndex = 5 + (offscreenScroll * 5);
  }
}
  if (keyCode === ENTER && menuButtonSelected === "Hair" && selectedColourIndex === 6) {
  if (x2 == 52) {
    selectedBlueHairIndex = 1 + (offscreenScroll * 5);
  } else if (x2 == 152) {
    selectedBlueHairIndex = 2 + (offscreenScroll * 5);
  } else if (x2 == 252) {
    selectedBlueHairIndex = 3 + (offscreenScroll * 5);
  } else if (x2 == 352) {
    selectedBlueHairIndex = 4 + (offscreenScroll * 5);
  } else if (x2 == 452) {
    selectedBlueHairIndex = 5 + (offscreenScroll * 5);
  }
}
    //chooses accessories from menu with selector
  if (keyCode === ENTER && menuButtonSelected === "Accessories") {
  if (x2 == 52) {
    selectedAccessories = 1 + (offscreenScroll * 5);
    chosenAccessoriesToDraw.push(selectedAccessories);
  } else if (x2 == 152) {
    selectedAccessories = 2 + (offscreenScroll * 5);
    chosenAccessoriesToDraw.push(selectedAccessories);
  } else if (x2 == 252) {
    selectedAccessories = 3 + (offscreenScroll * 5);
    chosenAccessoriesToDraw.push(selectedAccessories);
  } else if (x2 == 352) {
    selectedAccessories = 4 + (offscreenScroll * 5);
    chosenAccessoriesToDraw.push(selectedAccessories);
  } else if (x2 == 452) {
    selectedAccessories = 5 + (offscreenScroll * 5);
    chosenAccessoriesToDraw.push(selectedAccessories);
  }
  }
  if (x3>500){ // resets arrow position to first position if arrow moves off of right side of screen 
     x1 = 7;
     x2 = 52;
     x3 = 97;
    offscreenScroll++; //adjust offscreen scroll variable to know that the triangle moved offscreen
    
    //if offscreen scroll exceeds or equals to 3, resets to 0 to allow user to go through scrolling again for backgrounds
    if (offscreenScroll>=3 && menuButtonSelected==="Backgrounds"){ 
      offscreenScroll=0;
    }
    //adjust scrolling for t shirts
    else if (offscreenScroll>=2 && menuButtonSelected==="T Shirts"){
      offscreenScroll=0;
    }
   //adjust scrolling for eyes
    else if(offscreenScroll>=2 && menuButtonSelected==="Eyes"){
      offscreenScroll=0;
    }
    //adjust scrolling for mouths
    else if(offscreenScroll>=2 && menuButtonSelected==="Mouths"){
      offscreenScroll=0;
    }
    //adjust scrolling for hair outline
    else if(offscreenScroll>=2 && menuButtonSelected==="Hair"){
      offscreenScroll=0;
    }
    //adjust scrolling for accessories
    else if(offscreenScroll>=4 && menuButtonSelected==="Accessories"){
      offscreenScroll=0;
    }


      }
  else if (x3<0){ //if triangle moved off of left part of screen, reset, and reset the offscreen scroll variable for the selector
    x1 = 7;
    x2 = 52;
    x3 = 97;
    offscreenScroll=0;
  }
}

//draws circles that allow user to choose specific hair colours
function drawColourCircles(){
    let circleX = 80; // variable to hold x position of circle, useful for looping for more circles
  for (let i = 0; i < 7; i++) {
    strokeWeight(2);
    stroke(51);
    fill(circleColour[i]);
    ellipse(450, circleX, 50, 50);
    if (dist(mouseX, mouseY, 450, circleX) < circleRadius && mouseIsPressed)     {
      selectedColourIndex = i;
    }
    circleX += 40;
  }
} 

//draws all elements to screen
function draw() {
  background(255, 182, 193);
  drawCanvas();
  noStroke();
  drawRectangles();
  fill(255, 182, 193); // fill underneath the option boxes to cover potential spillover of images under rectangles
  rect(0,470,500,30);
  sideBar();
  squareSelector();
  if (menuButtonSelected==="Hair"){
     drawColourCircles();
  }
 drawButton();
  doneBuilding();
}

//if user chooses that they are done their character, it draws a final screen that gives a download option
function doneBuilding(){
  if (menuButtonSelected==="Done"){
  fill(255, 182, 193);
  rect(0, 0, 500, 500);
  sideBarVisibile=false;
  cornerImgCoordinate=25;
  xImgCoordinate = 450;
  yImgCoordinate = 338;
  drawCanvas();
  fill(231, 84, 128);
  textSize(30);
  textFont("Times New Roman");
  text("This is your completed character!", 50, 420);
  // Centered download button
  let downloadButton = createButton("Download Image");
  downloadButton.position(width / 2 - downloadButton.width / 2, 450);
  downloadButton.style('background-color', color(231, 84, 128));
  downloadButton.style('font-family', 'Times New Roman');
  downloadButton.mousePressed(downloadImage);
  }
}

function downloadImage(){
  // Capture a portion of the canvas
  let capturedImage = get(25, 25, 450, 338);
  // Display the captured image (optional)
  image(capturedImage, 0, 0);
  // Save the captured image
  save(capturedImage, 'myCharacter.png');
  console.log("Image saved!");
}

//draws the clear options button
function drawButton() {
  if (menuButtonSelected === "Accessories") {
    xButton = 360;
    yButton = 30;
    buttonWidth = 100;
    buttonHeight = 40;

      // Draw the border
      push(); // Save the current drawing style
      stroke(0); // Set border color to black
      strokeWeight(3); // Set border thickness

      noFill(); // Do not fill the rectangle
      rect(xButton, yButton, buttonWidth, buttonHeight);

      pop(); // Restore the previous drawing style

      // Draw the filled rectangle
      fill('pink');
      rect(xButton, yButton, buttonWidth, buttonHeight);

      // Draw the text
      fill(0); // Set text color to black
      textSize(15);
      textAlign(CENTER, CENTER);
      textFont("Times New Roman");
      text("Clear Options", xButton + buttonWidth / 2, yButton + buttonHeight / 2);

    if (
      mouseX >= xButton &&
      mouseX <= xButton + buttonWidth &&
      mouseY >= yButton &&
      mouseY <= yButton + buttonHeight &&
      mouseIsPressed
    ) {
      if (!buttonPressed) {
        clearButtonPressed();
        buttonPressed = true;
      }
    } else {
      buttonPressed = false;
    }
    buttonDrawn = true;
  } else {
    buttonDrawn = false;
  }
}

//draws all features on canvas
function drawCanvas(){
  fill(215, 218, 221);
  //draw background from array
 image(imagesBackground[selectedSquareIndexBck - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw body from array
image(imagesBodies[selectedSquareIndexBodies - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw t shirt from array
image(imagesTshirt[selectedSquareIndexTshirt - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw nose from array
image(imagesNoses[selectedSquareIndexNoses - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw eye base
image(imagesEyes[10], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw eyes from array
image(imagesEyes[selectedSquareIndexEyes - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw mouth from array
image(imagesMouths[selectedSquareIndexMouth - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//check what colour index is chosen to add a specific colour menu

//handle blond hair
if (selectedColourIndex === 0) {
    image(imagesBlondhair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle brown hair
if (selectedColourIndex === 1) {
    image(imagesBrownhair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle dark brown hair
if (selectedColourIndex === 2) {
    image(imagesDarkBrownhair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle black hair
if (selectedColourIndex === 3) {
    image(imagesBlackhair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle pink hair
if (selectedColourIndex === 4) {
    image(imagesPinkhair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle white hair
if (selectedColourIndex === 5) {
    image(imagesWhitehair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//handle blue hair
if (selectedColourIndex === 6) {
    image(imagesBluehair[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
}

//draw hair line from array
image(imagesHairLines[selectedSquareIndexHairline - 1], cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);

//draw accessories from array imagesAccessories
for (let i = 0; i < chosenAccessoriesToDraw.length; i++) {
    let selectedAccessories = chosenAccessoriesToDraw[i];
    let accessoryImage = imagesAccessories[selectedAccessories - 1];
    image(accessoryImage, cornerImgCoordinate, cornerImgCoordinate, xImgCoordinate, yImgCoordinate);
} 
}