'use strict';
var results = document.getElementById('results');
var threePics = document.getElementById('three-pics');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
var indexOne = 0;
var indexTwo = 0;
var indexThree = 0;
var itemVote = 0;
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

  itemCatalog[indexOne].totalDisplayed += itemCatalog[indexOne].totalDisplayed;
  itemCatalog[indexTwo].totalDisplayed += itemCatalog[indexTwo].totalDisplayed;
  itemCatalog[indexThree].totalDisplayed +=
  itemCatalog[indexThree].totalDisplayed;
}
function imgtallySelection(){
  for (var i = 0; i < itemCatalog.length; i++) {
    var listEl = document.createElement('li');
    listEl.textContent = itemCatalog[i].image + ' appeared ' + itemCatalog[i].totalDisplayed + ' times, and was chosen ' + itemCatalog[i].totalClicks + ' times.';
    results.appendChild(listEl);
  }
}

function userSelection(){
  var userChoice = event.target.id;
  console.log(userChoice);
  if (userChoice === 'left'){
    console.log('User chose left item.');
    itemVote += 1;
    console.log('This is round ' + (parseInt(itemVote) + 1));
    itemCatalog[indexOne].totalClicks += 1;
    console.log(itemCatalog[indexOne].image + ' chosen ' + itemCatalog[indexOne].totalClicks + ' times.');
  }
  else if (userChoice === 'center'){
    console.log('User chose center item.');
    itemVote += 1;
    console.log('This is round ' + (parseInt(itemVote) + 1));
    itemCatalog[indexTwo].totalClicks += 1;
    console.log(itemCatalog[indexTwo].image + ' chosen ' + itemCatalog[indexTwo].totalClicks + ' times.');
  }
  else if (userChoice === 'right'){
    console.log('User chose right item.');
    itemVote += 1;
    console.log('This is round ' + (parseInt(itemVote) + 1));
    itemCatalog[indexThree].totalClicks += 1;
    console.log(itemCatalog[indexThree].image + ' chosen ' + itemCatalog[indexThree].totalClicks + ' times.');
  }
  else {
    alert('Please select one of the images.');
  }
  if (itemVote < 25) {
    console.log(itemVote, ' total votes.');
    pictureRandomize();
  }
  else {
    threePics.removeEventListener('click',userSelection);
    var button = document.createElement('button');
    button.textContent = 'Survey completed. Please select here.';
    threePics.appendChild(button);
    button.addEventListener('click',userSelection);
  }
}

pictureRandomize();
threePics.addEventListener('click',userSelection);
