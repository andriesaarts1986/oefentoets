"use strict";

class Tocht {

  constructor (id, start) {
    this._id = id;
    this._start = start;
  }



}


// starten van een tocht

let tijdStart  = new Date();


let eenTocht = new Tocht(3, tijdStart)

console.log(eenTocht._id);
console.log(eenTocht._start);

// beeindigen van een tocht

eenTocht._eind = new Date();

console.log(eenTocht._eind)



let tochten = [];



tochten.push(eenTocht);

console.log(tochten);
