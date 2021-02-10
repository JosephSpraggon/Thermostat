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
    this.temp -= 1;
  }

}
