"use strict";

class Thermostat {

  constructor(){
    this.temp = 20;
  }

  checkTemp(){
    return this.temp;
  }

  raiseTemp(){
    this.temp += 1;
  }

  lowerTemp(){
    if (this.temp >= 11) {
    this.temp -= 1;
    }
    else {
    throw new Error("Minimum temp reached")
    }
  }

}
