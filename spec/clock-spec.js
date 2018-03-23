import {SpaceClock} from './../src/js/clock.js';

describe('SpaceClock', function(){
    let bday;
    let now;

  beforeEach(function() {
     bday = new SpaceClock(1976, 12, 17);
     now = new SpaceClock(2018, 3, 17);
   });

  it('should take in a set of numbers and return a SpaceClock object formatted to create Date objects', function(){
    let test = new SpaceClock(1976, 12, 17);
    let outcome = test.month;
    expect(outcome).toEqual(11);
  })

  it('should take a SpaceClock and return a rounded year from now', function(){
    let outcome = bday.roughYearsFromNow();
    expect(outcome).toEqual(41);
  })

  it('should create a new JS date object from the SpaceClock object', function(){
    let outcome = bday.makeDate();
    let result = outcome.toString();
  expect(result).toEqual("Fri Dec 17 1976 00:00:00 GMT-0800 (PST)");
  })

  it('should take two dates and return the difecence in rounded years', function(){
    let result = bday.roughYearsDiff(now);
    expect(result).toEqual(41);
  })

  it('should two dates and return an exact difference in time.', function(){
    let newer = new SpaceClock(2018, 3, 16, 15, 26, 30, 0)
    let result = newer.closeDiff(bday);
    expect(result).toEqual("41 years ,14  weeks, 2 days, 1 hours, 30 minuets, 0 seconds.");
  })

  it('should take a date from the past and return the difference in extra terrestrial (Mercury) years.', function(){
    let newer = new SpaceClock(2018, 3, 16, 15, 26, 30, 0)
    let result = newer.planetDiff(bday, "Merc")
    expect(result).toEqual("171 years ,50  weeks, 6 days, 2 hours, 15 minuets, 0 seconds.");
  })

  it('should return a loose life expectancy.', function(){
    let rando = new SpaceClock(1950, 1, 1, 0, 0, 0, 0)
    let result = rando.coarseLifeSpanLeftFromBday();
    expect(result).toEqual(10);
  })

  it('should take a SpaceClock instance of the users Birthday and a planet and return the expected life span left in that planets solar cycle.', function(){
    let rando = new SpaceClock(1950, 1, 1, 0, 0, 0, 0)
    let result = rando.planetEcpectencyFromBday("Merc");
    expect(result).toEqual("45 years ,1  weeks, 1 days, 12 hours, 10 minuets, 0 seconds.");
  })

})
