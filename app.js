'use strict'

//let location = document.getElementById('Location');
// let profileContainer = document.getElementById('seattlesales'); 
// console.log(profileContainer);


// let locationcitiesseattlesales = document.createElement('ul'); 

// profileContainer.appendChild(seattlesales);

// // h3
// let SeattleH3 = document.createElement('h3');





let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m.'];
// object literal
let seattlestore = {
  NameLoc: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  SEAcookiessoldphr: [],

render: function() {
  this.SEAcookiessoldphr();
  // method to render cookies sales as <ul>
  // windows into the dom 
  // us the id seattle sales
let salescontainer = document.getElementById('seattlesales');

let ulElement = document.createElement('ul');
// give it content
//append it to the dom
salescontainer.appendChild(ulElement)



// create a new element
for (let i =0; i < hour.length; i++) {
let lielement = document.createElement('li')
// give it content '6am: 16 cookies'
lielement.textContent = `${hours[i]}: ${SEAcookiessoldphr[i]}`
// append it to the dom
ulelement.appendChild(liElement);
}
let totallielement = document.createElement('li')
// append it to the dom
totallielement = `Total: ${this.dailytotal} cookies`;
ulElement.append(totallielement)
},


getNumberOfRandomcustomersphr: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculatecookiessoldphr: function() {
  // method? calculate and store the simulated amounts of cookies purchased
  // each hour at each location
  
  // using average cookies ourchased
  // and the random number of customers


  for (let i =0; i < hour.length; i++) {
    let seattcustomersphr = this.getNumberOfRandomcustomersphr();

  let seacookieavg = Math.ceil (seattcustomersphr * this.avg)
  //console.log(seaAvgphr)
  
  this.SEAcookiessoldphr.push(seaAvgphr)

  // calculating the sum of these hourly rates
  // x = x +1 
  //x += 1 
  this.dailytotal += seacookieavg;

  //console.log(this.SEAcookiessoldphr);
  //     console.log(calculatecookiessoldphr[i]);
  //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
 };
  }
}
console.log(seattlestore.getNumberOfRandomcustomersphr());

// console.log(seattlestore.calculatecookiessoldphr());













    // get the random number of customers
    // for each hour open... need to this 14 times
    // for loop? using hours.length
    // calculate the value
    // multiply the average for each customer

    // push number of cookies sold that hour to cookiessoldeachhourarray
    //render: function() {
    //this.calculatecookiessoldphr()
    //console.log('the render files')
  //   // render our lists in the DOM
  //   // use hour array and cookiesoldeachhourarray
 

//profileContainer.appendchild(locationCities);

// console.log(seattlestore.getNumberOfRandomcustomersphr());

// let tokyostore = {
//   NameLoc: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   getNumberOfRandomcustomersphr: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
//   }
// }
// console.log(tokyostore.getNumberOfRandomcustomersphr());

// let dubaiStore = {
//   NameLoc: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 2.3,
//   getNumberOfRandomcustomersphr() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
//   }
// }
// console.log(dubaiStore.getNumberOfRandomcustomersphr());

// let parisstore = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   getNumberOfRandomcustomersphr() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
//   }
// }
// console.log(dubaiStore.getNumberOfRandomcustomersphr());

// let limastore = {
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   getNumberOfRandomcustomersphr() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
//   }
// }
// console.log(limastore.getNumberOfRandomcustomersphr());













