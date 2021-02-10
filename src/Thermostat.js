"use strict";

class Thermostat {

  constructor(){
    this.temp = 20;
    this.MINIMUM_TEMPERATURE = 10
    this.maximum_temperature = 25
    this.powerSave = true
  }

  checkTemp(){
    return this.temp;
  }

  raiseTemp(){
    if (this.temp >= this.maximum_temperature) {
      throw new Error("Maximum temp reached");
    }
    this.temp += 1;
  }

  lowerTemp(){
    if (this.temp <= this.MINIMUM_TEMPERATURE) {
      throw new Error("Minimum temp reached");
    }
      this.temp -= 1;
  }

}
