'use strict';
// OLD object literalS

// let seattlestore = {
//   NameLoc: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   SEAcookiessoldphr: [],
//   dailytotal: 0,

//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculatecookiessoldphr: function() {
//   // method? calculate and store the simulated amounts of cookies purchased
//   // each hour at each location

//   // using average cookies purchased
//   // and the random number of customers
//   for (let i = 0; i < hour.length; i++) {

//     let seattcustomers = this.getNumberOfRandomcustomersphr();
//     //console.log(seattcustomers)

//     let cookiessoldthishour = Math.ceil(seattcustomers * this.avg); 
//    // console.log(cookiessoldthishour);
//     this.SEAcookiessoldphr.push(cookiessoldthishour);

//     // calculating the sum of these hourly totals
//     this.dailytotal += cookiessoldthishour


//   //let seacookieavg = Math.ceil (seattcustomers * this.avg)
//   //console.log(seaAvgphr)

//   //this.SEAcookiessoldphr.push(seaAvgphr)

//   // calculating the sum of these hourly rates
//   // x = x +1 
//   //x += 1 
//   //this.dailytotal += seacookieavg;

//   //console.log(this.SEAcookiessoldphr);
//   //     console.log(calculatecookiessoldphr[i]);
//   //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
//   }
//   console.log(this.SEAcookiessoldphr);
//  },
//  render: function() {
//   this.calculatecookiessoldphr();

//   let salescontainer = document.getElementById('seattlesales'); 
//   let h2element = document.createElement('h2');

//   h2element.textContent = 'seattlesales'
// salescontainer.appendChild(h2element)


//   let ulElement = document.createElement('ul');
//   console.log(salescontainer);

//   salescontainer.appendChild(ulElement);

//   for (let i = 0; i < hour.length; i++) {

//  //create
//   let liElement = document.createElement('li');
// // content
// liElement.textContent = `${hour[i]}; ${this.SEAcookiessoldphr[i]} cookies`;

// // append
// ulElement.appendChild(liElement);
//  }
//  // create
//  //content
//  // append it to dom
//  let totallielement = document.createElement('li');
//  totallielement.textContent = `Total; ${this.dailytotal} cookies`
//  ulElement.appendChild(totallielement);
//  }
// }

// seattlestore.calculatecookiessoldphr();
// seattlestore.render();
// //console.log(seattlestore.calculatecookiessoldphr());
// //console.log(seattlestore.getNumberOfRandomcustomersphr());

// // console.log(seattlestore.calculatecookiessoldphr());













//     // get the random number of customers
//     // for each hour open... need to this 14 times
//     // for loop? using hours.length
//     // calculate the value
//     // multiply the average for each customer

//     // push number of cookies sold that hour to cookiessoldeachhourarray
//     //render: function() {
//     //this.calculatecookiessoldphr()
//     //console.log('the render files')
//   //   // render our lists in the DOM
//   //   // use hour array and cookiesoldeachhourarray


// //profileContainer.appendchild(locationCities);

// // console.log(seattlestore.getNumberOfRandomcustomersphr());

// let tokyostore = {
//   NameLoc: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   Tokcookiessoldphr: [],
//   dailytotal: 0,

//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculatecookiessoldphr: function() {
//   // method? calculate and store the simulated amounts of cookies purchased
//   // each hour at each location

//   // using average cookies ourchased
//   // and the random number of customers
//   for (let i = 0; i < hour.length; i++) {

//     let tokyocustomers = this.getNumberOfRandomcustomersphr();
//     //console.log(seattcustomers)

//     let cookiessoldthishour = Math.ceil(tokyocustomers * this.avg); 
//    // console.log(cookiessoldthishour);
//     this.Tokcookiessoldphr.push(cookiessoldthishour);

//     // calculating the sum of these hourly totals
//     this.dailytotal += cookiessoldthishour


//   //let seacookieavg = Math.ceil (seattcustomers * this.avg)
//   //console.log(seaAvgphr)

//   //this.SEAcookiessoldphr.push(seaAvgphr)

//   // calculating the sum of these hourly rates
//   // x = x +1 
//   //x += 1 
//   //this.dailytotal += seacookieavg;

//   //console.log(this.SEAcookiessoldphr);
//   //     console.log(calculatecookiessoldphr[i]);
//   //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
//   }
//   console.log(this.Tokcookiessoldphr);
//  },
//  render: function() {
//   this.calculatecookiessoldphr();

//   let salescontainer = document.getElementById('tokyosales'); 
//   let h2element = document.createElement('h2');

//   h2element.textContent = 'tokyosales'
// salescontainer.appendChild(h2element)


//   let ulElement = document.createElement('ul');
//   console.log(salescontainer);

//   salescontainer.appendChild(ulElement);

//   for (let i = 0; i < hour.length; i++) {

//  //create
//   let liElement = document.createElement('li');
// // content
// liElement.textContent = `${hour[i]}; ${this.Tokcookiessoldphr[i]} cookies`;

// // append
// ulElement.appendChild(liElement);
//  }
//  // create
//  //content
//  // append it to dom
//  let totallielement = document.createElement('li');
//  totallielement.textContent = `Total; ${this.dailytotal} cookies`
//  ulElement.appendChild(totallielement);
//  }
// }

// tokyostore.calculatecookiessoldphr();
// tokyostore.render();


// let dubaiStore = {
//   NameLoc: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 2.3,
//  Dubcookiessoldphr: [],
//   dailytotal: 0,

//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculatecookiessoldphr: function() {
//   // method? calculate and store the simulated amounts of cookies purchased
//   // each hour at each location

//   // using average cookies ourchased
//   // and the random number of customers
//   for (let i = 0; i < hour.length; i++) {

//     let Dubcustomers = this.getNumberOfRandomcustomersphr();
//     //console.log(seattcustomers)

//     let cookiessoldthishour = Math.ceil(Dubcustomers * this.avg); 
//    // console.log(cookiessoldthishour);
//     this.Dubcookiessoldphr.push(cookiessoldthishour);

//     // calculating the sum of these hourly totals
//     this.dailytotal += cookiessoldthishour


//   //let seacookieavg = Math.ceil (seattcustomers * this.avg)
//   //console.log(seaAvgphr)

//   //this.SEAcookiessoldphr.push(seaAvgphr)

//   // calculating the sum of these hourly rates
//   // x = x +1 
//   //x += 1 
//   //this.dailytotal += seacookieavg;

//   //console.log(this.SEAcookiessoldphr);
//   //     console.log(calculatecookiessoldphr[i]);
//   //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
//   }
//   console.log(this. Dubcookiessoldphr);
//  },
//  render: function() {
//   this.calculatecookiessoldphr();

//   let salescontainer = document.getElementById('dubaisales'); 
//   let h2element = document.createElement('h2');

//   h2element.textContent = 'dubaisales'
// salescontainer.appendChild(h2element)


//   let ulElement = document.createElement('ul');
//   console.log(salescontainer);

//   salescontainer.appendChild(ulElement);

//   for (let i = 0; i < hour.length; i++) {

//  //create
//   let liElement = document.createElement('li');
// // content
// liElement.textContent = `${hour[i]}; ${this.Dubcookiessoldphr[i]} cookies`;

// // append
// ulElement.appendChild(liElement);
//  }
//  // create
//  //content
//  // append it to dom
//  let totallielement = document.createElement('li');
//  totallielement.textContent = `Total; ${this.dailytotal} cookies`
//  ulElement.appendChild(totallielement);
//  }
// }

// dubaiStore.calculatecookiessoldphr();
// dubaiStore.render();

// let parrisstore = {
//   NameLoc: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//  parriscookiesphr: [],
//   dailytotal: 0,

//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculatecookiessoldphr: function() {
//   // method? calculate and store the simulated amounts of cookies purchased
//   // each hour at each location

//   // using average cookies ourchased
//   // and the random number of customers
//   for (let i = 0; i < hour.length; i++) {

//     let parriscustomers = this.getNumberOfRandomcustomersphr();
//     //console.log(seattcustomers)

//     let cookiessoldthishour = Math.ceil(parriscustomers * this.avg); 
//    // console.log(cookiessoldthishour);
//     this.parriscookiesphr.push(cookiessoldthishour);

//     // calculating the sum of these hourly totals
//     this.dailytotal += cookiessoldthishour


//   //let seacookieavg = Math.ceil (seattcustomers * this.avg)
//   //console.log(seaAvgphr)

//   //this.SEAcookiessoldphr.push(seaAvgphr)

//   // calculating the sum of these hourly rates
//   // x = x +1 
//   //x += 1 
//   //this.dailytotal += seacookieavg;

//   //console.log(this.SEAcookiessoldphr);
//   //     console.log(calculatecookiessoldphr[i]);
//   //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
//   }
//   console.log(this.parriscookiesphr);
//  },
//  render: function() {
//   this.calculatecookiessoldphr();

//   let salescontainer = document.getElementById('parrissales'); 
//   let h2element = document.createElement('h2');

//   h2element.textContent = 'parrissales'
// salescontainer.appendChild(h2element)


//   let ulElement = document.createElement('ul');
//   console.log(salescontainer);

//   salescontainer.appendChild(ulElement);

//   for (let i = 0; i < hour.length; i++) {

//  //create
//   let liElement = document.createElement('li');
// // content
// liElement.textContent = `${hour[i]}; ${this.parriscookiesphr[i]} cookies`;

// // append
// ulElement.appendChild(liElement);
//  }
//  // create
//  //content
//  // append it to dom
//  let totallielement = document.createElement('li');
//  totallielement.textContent = `Total; ${this.dailytotal} cookies`
//  ulElement.appendChild(totallielement);
//  }
// }

// parrisstore.calculatecookiessoldphr();
// parrisstore.render();

// let limastore = {
//   NameLoc: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//  limacookiesphr: [],
//   dailytotal: 0,

//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculatecookiessoldphr: function() {
//   // method? calculate and store the simulated amounts of cookies purchased
//   // each hour at each location

//   // using average cookies ourchased
//   // and the random number of customers
//   for (let i = 0; i < hour.length; i++) {

//     let limacustomers = this.getNumberOfRandomcustomersphr();
//     //console.log(seattcustomers)

//     let cookiessoldthishour = Math.ceil(limacustomers * this.avg); 
//    // console.log(cookiessoldthishour);
//     this.limacookiesphr.push(cookiessoldthishour);

//     // calculating the sum of these hourly totals
//     this.dailytotal += cookiessoldthishour


//   //let seacookieavg = Math.ceil (seattcustomers * this.avg)
//   //console.log(seaAvgphr)

//   //this.SEAcookiessoldphr.push(seaAvgphr)

//   // calculating the sum of these hourly rates
//   // x = x +1 
//   //x += 1 
//   //this.dailytotal += seacookieavg;

//   //console.log(this.SEAcookiessoldphr);
//   //     console.log(calculatecookiessoldphr[i]);
//   //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
//   }
//   console.log(this.parriscookiesphr);
//  },
//  render: function() {
//   this.calculatecookiessoldphr();

//   let salescontainer = document.getElementById('limasales'); 
//   let h2element = document.createElement('h2');

//   h2element.textContent = 'limasales'
// salescontainer.appendChild(h2element)


//   let ulElement = document.createElement('ul');
//   console.log(salescontainer);

//   salescontainer.appendChild(ulElement);

//   for (let i = 0; i < hour.length; i++) {

//  //create
//   let liElement = document.createElement('li');
// // content
// liElement.textContent = `${hour[i]}; ${this.limacookiesphr[i]} cookies`;

// // append
// ulElement.appendChild(liElement);
//  }
//  // create
//  //content
//  // append it to dom
//  let totallielement = document.createElement('li');
//  totallielement.textContent = `Total; ${this.dailytotal} cookies`
//  ulElement.appendChild(totallielement);
//  }
// }

// limastore.calculatecookiessoldphr();
// limastore.render();




let allstores = [];

let hourTotal = [];


let seattlestore = new City('Seattle', 23, 65, 6.3);
//console.log(Firststore);

let tokyostore = new City('Tokyo', 3, 24, 1.2);
//console.log(Secondstore);

let dubaistore = new City('Dubai', 11, 38, 2.3);

//console.log(Thirdstore);

let parrisstore = new City('Paris', 20, 38, 2.3);

//console.log(Fourthstore);

let limastore = new City('Lima', 2, 16, 4.6);

allstores.push(seattlestore, tokyostore, dubaistore, parrisstore, limastore);

let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m.'];
// GLOBALS

let cities = document.getElementById('cities');

let cityTableBody = document.querySelector('tbody');
let cityTableHead = document.querySelector('thead');
let cityTableFoot = document.querySelector('tfoot');
let cookiesform = document.getElementById('cookiesform');




function randomCustomer(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min));
}

function renderAll() {
  for (let i = 0; i < allstores.length; i++) {
    allstores[i].getCookiesSold();
    allstores[i].render();
  }
}

function tableHeader() {
  let row1 = document.createElement('tr');
  cities.appendChild(row1);
  let cityHead = document.createElement('th');
  cityHead.innerText = 'City Name'
  row1.appendChild(cityHead);
  for (let i = 0; i < hour.length; i++) {
    let thirdElement = document.createElement('th');
    thirdElement.innerText = `${hour[i]}`;
    row1.appendChild(thirdElement);
  }
  let totalCities = document.createElement('th');
  totalCities.innerText = 'Daily Cities Total';
  row1.appendChild(totalCities);
}

// function cityTableBody ()  {
//   let tableBody = document.createElement('tbody')
//   cityTableBody.appendChild(tableBody);
// }

function tableFooter() {
  let footer = document.createElement('tr')
  footer.innerText = 'Totals Per HR'
  footer.id = 'tableFooter'
  cities.appendChild(footer);
  for (let i = 0; i < hourTotal.length; i++) {
    let thirdElement = document.createElement('th');
    thirdElement.innerText = `${hourTotal[i]}`;
    footer.appendChild(thirdElement);
  }
  let grandTotal = 0;
  for (let i = 0; i < hourTotal.length; i++) {
    grandTotal = hourTotal[i] + grandTotal;
  }
  let thirdElement = document.createElement('th');
  thirdElement.innerText = 'Grand Total is: ' + grandTotal;
  footer.appendChild(thirdElement);
}

function totalPerHour(randomNumber, i) {
  hourTotal[i] += randomNumber;
}


function City(loc, min, max, avg,) {
  this.loc = loc;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSold = [];
  // //this.renderList = function () {
  //   let ul = document.createElement('ul');
  //   storesinformation.appendChild(ul);

  //   for (let i = 0; i < hour.length[i]; i++); ul.appendChild(li);
  // }
}

City.prototype.getCookiesSold = function () {
  let allCookies = 0;
  let randomNum = 0;
  for (let i = 0; i < hour.length; i++) {
    randomNum = Math.floor(randomCustomer(this.min, this.max) * this.avg);
    this.cookiesSold.push(randomNum);
    allCookies = randomNum + allCookies;
    totalPerHour(randomNum, i);


    if (i === hour.length - 1) {
      this.cookiesSold.push(`Total: ${allCookies}`);
    }
  }
};

City.prototype.render = function () {
  let row2
    = document.createElement('tr')
  cities.appendChild(row2);
  let nameofCity = document.createElement('td')
  nameofCity.innerText = this.loc;
  row2.appendChild(nameofCity);

  for (let i = 0; i < this.cookiesSold.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.innerText = this.cookiesSold[i];
    row2.appendChild(tdElement);

  }
};


// DOM WINDOWS



//seattlestore.getCookiesSold();
// tableHeader();
// // hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// renderAll();
// tableFooter();
// hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// cookiesform.addEventListener('submit', handleSubmit);
//EVENT FUCNTION
// GET DATA FROM A FORM

// 1 GET ELEMENT FROM THE DOM

// 2 add event listner


// Define our even handler
 function handleSubmit (event) {
  event.preventDefault();
  let cityName = event.target.cityName.value;
  let minCustomer = event.target.minCustomer.value;
  let maxCustomer = event.target.maxCustomer.value;
  let avgCookie = event.target.avgCookie.value;

  // let favorites = [event.target.fav1.value, event.target.fav2.value, event.target.fav3.value, event.target.fav3.value]

  let newCity = new City(cityName, minCustomer, maxCustomer, avgCookie);

  allstores.push(newCity);
  newCity.getCookiesSold();
  newCity.render();
  document.getElementById('tableFooter').remove();
  tableFooter();
}
tableHeader();
hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
renderAll();
tableFooter();
cookiesform.addEventListener('submit', handleSubmit);
//hourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// render: function() {
//   this.SEAcookiessoldphr();
//   // method to render cookies sales as <ul>
//   // windows into the dom 
//   // us the id seattle sales
// let salescontainer = document.getElementById('seattlesales');

// let ulElement = document.createElement('ul');
// // give it content
// //append it to the dom
// salescontainer.appendChild(ulElement)



// // create a new element
// for (let i =0; i < hour.length; i++) {
// let lielement = document.createElement('li')
// // give it content '6am: 16 cookies'
// lielement.textContent = `${hours[i]}: ${SEAcookiessoldphr[i]}`
// // append it to the dom
// ulelement.appendChild(liElement);
// }
// let totallielement = document.createElement('li')
// // append it to the dom
// totallielement = `Total: ${this.dailytotal} cookies`;
// ulElement.append(totallielement)
// },

