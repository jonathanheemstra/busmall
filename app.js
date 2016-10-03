'use strict';
var results = document.getElementById('results');
var threePics = document.getElementById('three-pics');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
var indexOne = 0;
var indexTwo = 0;
var indexThree = 0;
var itemCatalog = [];

function ItemLog(image, filePath) {
  this.image = image;
  this.filePath = filePath;
  this.totalClicks = 0;
  this.totalDisplayed = 0;
  itemCatalog.push(this);
}

var bag = new ItemLog('Bag','img/bag.jpg');
var banana = new ItemLog('Banana','img/banana.jpg');
var bathroom = new ItemLog('Bathroom','img/bathroom.jpg');
var boots = new ItemLog('Boots', 'img/boots.jpg');
var breakfast = new ItemLog('Breakfast', 'img/breakfast.jpg');
var bubblegum = new ItemLog('Bubblegum','img/bubblegum.jpg');
var chair = new ItemLog ('Chair', 'img/chair.jpg');
var cthulhu = new ItemLog('Cthulhu', 'img/cthulhu.jpg');
var dogDuck = new ItemLog('Dog Duck','img/dog-duck.jpg');
var dragon = new ItemLog('Dragon', 'img/dragon.jpg');
var pen = new ItemLog('Pen', 'img/pen.jpg');
var petSweep = new ItemLog('Pet Sweep', 'img/pet-sweep.jpg');
var scissors = new ItemLog('Scissors', 'img/scissors.jpg');
var shark = new ItemLog('Shark', 'img/shark.jpg');
var sweep = new ItemLog('Sweep', 'img/sweep.png');
var tauntaun= new ItemLog('Tauntaun','img/tauntaun.jpg');
var unicorn = new ItemLog('Unicorn','img/unicorn.jpg');
var usb = new ItemLog('Usb', 'img/usb.gif');
var waterCan = new ItemLog('Watering Can', 'img/water-can.jpg');
var wineGlass = new ItemLog('Wine Glass', 'img/wine-glass.jpg');

function pictureRandomize(){
  indexOne = Math.floor(Math.random() * itemCatalog.length);
  indexTwo = Math.floor(Math.random() * itemCatalog.length);
  while (indexOne === indexTwo) {
    indexTwo = Math.floor(Math.random() * itemCatalog.length);
  }
indexThree = Math.floor(Math.random() * itemCatalog.length);
  while (indexThree === indexTwo || indexThree === indexOne){
    indexThree = Math.floor(Math.random() * itemCatalog.length);
  }
  console.log(indexOne, indexTwo, indexThree);

  imgLeft.src = itemCatalog[indexOne].filePath;
  imgLeft.alt = itemCatalog[indexOne].image;
  imgCenter.src = itemCatalog[indexTwo].filePath;
  imgCenter.alt = itemCatalog[indexTwo].image;
  imgRight.src = itemCatalog[indexThree].filePath;
  imgRight.alt = itemCatalog[indexThree].image;

  itemCatalog[indexOne].totalDisplayed = itemCatalog[indexOne].totalDisplayed + 1;
  itemCatalog[indexTwo].totalDisplayed = itemCatalog[indexTwo].totalDisplayed + 1;
  itemCatalog[indexThree].totalDisplayed =
  itemCatalog[indexThree].totalDisplayed + 1;
}
function imgSelection(){

}





pictureRandomize();
