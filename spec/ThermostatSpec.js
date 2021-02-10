"use strict";

describe('Thermostat', function(){

  var test;
  beforeEach(function(){
    test = new Thermostat();
  });

  it('should at a default of 20', function(){
    expect(test.checkTemp()).toEqual(20);
  });

  it('can raise the temperature', function(){
    test.raiseTemp();
    expect(test.checkTemp()).toEqual(21);
  });

  it('can lower the temperature', function(){
    test.lowerTemp();
    expect(test.checkTemp()).toEqual(19);
  });

  it('has a power saving mode', function(){
    expect(test.powerSave).toBe(true);
  });

  it('should have a minimum temperature of 10', function(){
    test.temp = 10;
    expect(function() {
      test.lowerTemp();
    }).toThrowError("Minimum temp reached");
  });

  it('should have maximum temperature of 25', function() {
    test.temp = 25
    expect(function() {
      test.raiseTemp();
    }).toThrowError("Maximum temp reached");
  });

});
