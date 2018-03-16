import {SpaceClock} from './../src/js/clock.js';

describe('SpaceClock', function(){

  it('should take a number and return a rounded year', function(){
    let bday = new SpaceClock(1976, 12, 17);
    let outcome = bday.roughYears();
    expect(outcome).toEqual(41);
  })

  it('should create a new JS date object from the SpaceClock object', function(){
    let bday = new SpaceClock(1976, 12, 17);
    let outcome = bday.makeDate();
    let result = outcome.toString();
  expect(result).toEqual("Fri Dec 17 1976 00:00:00 GMT-0800 (Pacific Standard Time)");
  })

  it('should take two dates and return the difecence in seconds', function(){
    ///
  })

  it('should take a date from the past and return the difference in extra terrestrial years.', function(){
    ///
  })

  it('should take basic demographic info and return a loose life expectancy on another planet.', function(){
    ///
  })


})
