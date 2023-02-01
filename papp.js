'use strict'
console.log('hi');
let profileContainer = document.getElementById ('cities');




let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m.'];
// object literal
function seattlestore() {
  this.min = 23,
  this.max = 65,
  this.avg = 6.3,
  this.SEAcookiessoldphr,
  this.dailytotal
}

let limastore = {
  NameLoc: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
 limacookiesphr: [],
  dailytotal: 0,

  getNumberOfRandomcustomersphr: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculatecookiessoldphr: function() {
  // method? calculate and store the simulated amounts of cookies purchased
  // each hour at each location
  
  // using average cookies ourchased
  // and the random number of customers
  for (let i = 0; i < hour.length; i++) {
    
    let limacustomers = this.getNumberOfRandomcustomersphr();
    //console.log(seattcustomers)
    
    let cookiessoldthishour = Math.ceil(limacustomers * this.avg); 
   // console.log(cookiessoldthishour);
    this.limacookiesphr.push(cookiessoldthishour);

    // calculating the sum of these hourly totals
    this.dailytotal += cookiessoldthishour
    

  //let seacookieavg = Math.ceil (seattcustomers * this.avg)
  //console.log(seaAvgphr)
  
  //this.SEAcookiessoldphr.push(seaAvgphr)

  // calculating the sum of these hourly rates
  // x = x +1 
  //x += 1 
  //this.dailytotal += seacookieavg;

  //console.log(this.SEAcookiessoldphr);
  //     console.log(calculatecookiessoldphr[i]);
  //    let numbersofcustomers = this.getNumberOfRandomcustomersphr()
  }
  console.log(this.parriscookiesphr);
 },
 render: function() {
  this.calculatecookiessoldphr();
 
  let salescontainer = document.getElementById('limasales'); 
  let h2element = document.createElement('h2');

  h2element.textContent = 'limasales'
salescontainer.appendChild(h2element)
 

  let ulElement = document.createElement('ul');
  console.log(salescontainer);
 
  salescontainer.appendChild(ulElement);

  for (let i = 0; i < hour.length; i++) {

 //create
  let liElement = document.createElement('li');
// content
liElement.textContent = `${hour[i]}; ${this.limacookiesphr[i]} cookies`;

// append
ulElement.appendChild(liElement);
 }
 // create
 //content
 // append it to dom
 let totallielement = document.createElement('li');
 totallielement.textContent = `Total; ${this.dailytotal} cookies`
 ulElement.appendChild(totallielement);
 }
}

limastore.calculatecookiessoldphr();
limastore.render();