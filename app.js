'use strict';
var results = document.getElementById('results');
var threePics = document.getElementById('three-pics');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
var indexOne = 0; //counter for left pane
var indexTwo = 0; //counter for center pane
var indexThree = 0; //counter for right pane
var itemVote = 0; //vote counter
var itemCatalog = []; //catalog for each respective image
var lastItemIndex = [0, 1, 2];
var indexSave = [];
var selections = [];
var itemNames = [];
var chartResults;

function ItemLog(image, filePath, timesClicked, timesDisplayed) {
  this.image = image;
  this.filePath = filePath;
  this.totalClicks = timesClicked || 0;
  this.totalDisplayed = timesDisplayed || 0;
  itemCatalog.push(this);
}

if (localStorage.getItem('products')) {
  var productsStringified = localStorage.getItem('products');
  var productsUnstringified = JSON.parse(productsStringified);
  console.log(productsUnstringified);
  for (var i = 0; i < productsUnstringified.length; i++) {
    var currentProduct = productsUnstringified[i];
    new ItemLog(
      currentProduct.image,
      currentProduct.filePath,
      currentProduct.totalClicks,
      currentProduct.totalDisplayed);
  }
} else {
  new ItemLog('Bag','img/bag.jpg');
  new ItemLog('Banana','img/banana.jpg');
  new ItemLog('Bathroom','img/bathroom.jpg');
  new ItemLog('Boots', 'img/boots.jpg');
  new ItemLog('Breakfast', 'img/breakfast.jpg');
  new ItemLog('Bubblegum','img/bubblegum.jpg');
  new ItemLog ('Chair', 'img/chair.jpg');
  new ItemLog('Cthulhu', 'img/cthulhu.jpg');
  new ItemLog('Dog Duck','img/dog-duck.jpg');
  new ItemLog('Dragon', 'img/dragon.jpg');
  new ItemLog('Pen', 'img/pen.jpg');
  new ItemLog('Pet Sweep', 'img/pet-sweep.jpg');
  new ItemLog('Scissors', 'img/scissors.jpg');
  new ItemLog('Shark', 'img/shark.jpg');
  new ItemLog('Sweep', 'img/sweep.png');
  new ItemLog('Tauntaun', 'img/tauntaun.jpg');
  new ItemLog('Unicorn','img/unicorn.jpg');
  new ItemLog('Usb', 'img/usb.gif');
  new ItemLog('Watering Can', 'img/water-can.jpg');
  new ItemLog('Wine Glass', 'img/wine-glass.jpg');
}

function clickStorage () {
  console.log('click storage');
  var productsStringified = JSON.stringify(itemCatalog);
  localStorage.setItem('products', productsStringified);
}


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

  indexSave = [];
  indexSave.push(indexOne);
  indexSave.push(indexTwo);
  indexSave.push(indexThree);

  lastItemIndex = [];
  lastItemIndex.push(indexOne);
  lastItemIndex.push(indexTwo);
  lastItemIndex.push(indexThree);

  imgLeft.src = itemCatalog[indexOne].filePath;
  imgLeft.alt = itemCatalog[indexOne].image;
  imgCenter.src = itemCatalog[indexTwo].filePath;
  imgCenter.alt = itemCatalog[indexTwo].image;
  imgRight.src = itemCatalog[indexThree].filePath;
  imgRight.alt = itemCatalog[indexThree].image;

  itemCatalog[indexOne].totalDisplayed += 1;
  itemCatalog[indexTwo].totalDisplayed += 1;
  itemCatalog[indexThree].totalDisplayed += 1;
}

function chartFiller(){
  console.log('chartFiller');
  for (var i = 0; i < itemCatalog.length; i++) {
    itemNames[i] = itemCatalog[i].image;
    selections[i] = itemCatalog[i].totalClicks;
  }
}
console.log('selections', selections);
var data = {
  labels: itemNames,
  datasets: [
    {
      label: 'total clicks',
      data: selections,
    }]
};

function chartDrawing(){
  console.log('chartDrawing');
  var chartContext = document.getElementById('result-chart').getContext('2d');
  var resultChart = new Chart(chartContext, {
    type: 'bar',
    data: data,
    options: {
      responsive: false
    },
    scales: [{
      ticks: {
        beginAtZero: true
      }
    }]
  });
}

// function imgtallySelection(){
//   console.log('imgtallySelection');
//   for (var i = 0; i < itemCatalog.length; i++) {
//     var listEl = document.createElement('li');
//     listEl.textContent = itemCatalog[i].image + ' appeared ' + itemCatalog[i].totalDisplayed + ' times, and was chosen ' + itemCatalog[i].totalClicks + ' times.';
//     results.appendChild(listEl);
//   }
// }

function userSelection(event){
  console.log('userSelection');
  var userChoice = event.target.id;
  console.log(userChoice);
  if (userChoice === 'left'){
    console.log('User chose left item.');
    itemVote += 1;
    console.log('This is round ' + itemVote + 1);
    itemCatalog[indexOne].totalClicks += 1;
    console.log(itemCatalog[indexOne].image + ' chosen ' + itemCatalog[indexOne].totalClicks + ' times.');
    clickStorage();
  }
  else if (userChoice === 'center'){
    console.log('User chose center item.');
    itemVote += 1;
    console.log('This is round ' + itemVote + 1);
    itemCatalog[indexTwo].totalClicks += 1;
    console.log(itemCatalog[indexTwo].image + ' chosen ' + itemCatalog[indexTwo].totalClicks + ' times.');
    clickStorage();
  }
  else if (userChoice === 'right'){
    console.log('User chose right item.');
    itemVote += 1;
    console.log('This is round ' + itemVote + 1);
    itemCatalog[indexThree].totalClicks += 1;
    console.log(itemCatalog[indexThree].image + ' chosen ' + itemCatalog[indexThree].totalClicks + ' times.');
    clickStorage();
  }
  else {//good here
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
    chartFiller();
    button.addEventListener('click',chartDrawing);
    console.table(itemCatalog);//displays table of array in the console for easy reading!!!
  }
}

pictureRandomize();
threePics.addEventListener('click',userSelection);
