import {SpaceClock} from './../src/js/clock.js';

describe('SpaceClock', function(){
    let bday;
    let now;
  beforeEach(function() {
     bday = new SpaceClock(1976, 12, 17);
     now = new SpaceClock(2018, 3, 17);
   });


  it('should take a number and return a rounded year from now', function(){
    // let bday = new SpaceClock(1976, 12, 17);
    let outcome = bday.roughYearsFromNow();
    expect(outcome).toEqual(41);
  })

  it('should create a new JS date object from the SpaceClock object', function(){
    // let bday = new SpaceClock(1976, 12, 17);
    let outcome = bday.makeDate();
    let result = outcome.toString();
  expect(result).toEqual("Fri Dec 17 1976 00:00:00 GMT-0800 (Pacific Standard Time)");
  })

  it('should take two dates and return the difecence in rounded years', function(){
    let result = bday.roughYearsDiff(now);
    expect(result).toEqual(41);
  })

  it('should take a date from the past and return the difference in extra terrestrial years.', function(){
    ///
  })

  it('should take basic demographic info and return a loose life expectancy on another planet.', function(){
    ///
  })


})
