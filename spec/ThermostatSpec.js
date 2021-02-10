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



});
