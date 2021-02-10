"use strict";

describe('Thermostat', function(){

  var test;
  beforeEach(function(){
    test = new Thermostat();
  });

  it('should at a default of 20', function(){
    expect(test.checkTemp()).toEqual(20);
  });

  it('the temperature can be raised', function(){
    test.raiseTemp();
    expect(test.checkTemp()).toEqual(21);
  });

});
