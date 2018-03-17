export class SpaceClock{
  constructor(year, month, day, hour =0, minuet =0, second =0, mili =0){
    this.year= year;
    this.month = month-1;
    this.day = day;
    this.hour = hour;
    this.minuet = minuet;
    this.second = second;
    this.mili = mili;
  }

  makeDate(){
    let newDate = new Date(this.year, this.month, this.day, this.minuet, this.second, this.mili)
    return newDate;
  }

  roughYearsFromNow(){
    let nowish = new Date();
    let rYears = Math.floor((nowish - this.makeDate())/31536000000);
    return rYears;
  }

  roughYearsDiff(clock2){
    let earlier = this.makeDate();
    let later = clock2.makeDate();
    let milis  = later - earlier;
    let roughDiff = Math.floor(milis/31536000000);
    return roughDiff;
  }


planetDiff(olderClock, planet){
let a = this.makeDate();
let b = olderClock.makeDate();
let x = 0;
if (planet == "Merc"){
  x = .24;
}else if (planet =="Ven"){
  x = .62;
} else if (planet == "Mar"){
  x = 1.88
} else if (planet == "Jup"){
  x = 11.86
}
let coarseSecs = (a - b)/1000;
let years = Math.floor(coarseSecs/(31536000 *x));
let weeks = Math.floor((coarseSecs % (31536000 * x)) / (604800 * x));
let days = Math.floor(((coarseSecs % (31536000 * x)) % (604800 * x)) / (86400 * x));
let hours = Math.floor((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) / (3600 * x));
let mins = Math.floor(((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) % (3600 * x))/(60 * x));
let secs = Math.floor(((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) % (3600 * x))%(60 * x));
let answer = `${years} years ,${weeks}  weeks, ${days} days, ${hours} hours, ${mins} minuets, ${secs} seconds.`;

return answer;
}

fineLifeSpanLeftFromBday(){
this.year += 79;
let now = new Date();
let remains = (this.makeDate() - now ) / 1000 ;
let result = (remains)
this.year -= 79;

return result;
}

coarseLifeSpanLeftFromBday(){
this.year += 79;
let now = new Date();
let remains = (this.makeDate() - now ) / 1000 ;
let result = Math.floor(remains/31536000);
this.year -= 79;

return result;
}

fineLifeSpanLeftFromBdayTEST(){
  this.year += 79;
  let thisDate = new SpaceClock(2018, 3, 16, 0, 0, 0, 0);
  let now = thisDate.makeDate();
  let remains = (this.makeDate() - now ) / 1000 ;
  let result = (remains)
  this.year -= 79;

  return result;
}


closeDiff(olderClock){
  let a = this.makeDate();
  let b = olderClock.makeDate();
  let coarseSecs = (a - b)/1000;
  let years = Math.floor(coarseSecs/31536000);
  let weeks = Math.floor((coarseSecs % 31536000) / 604800);
  let days = Math.floor(((coarseSecs % 31536000) % 604800) / 86400);
  let hours = Math.floor((((coarseSecs % 31536000) % 604800) % 86400) / 3600);
  let mins = Math.floor(((((coarseSecs % 31536000) % 604800) % 86400) % 3600)/60);
  let secs = Math.floor(((((coarseSecs % 31536000) % 604800) % 86400) % 3600)%60);
  let answer = `${years} years ,${weeks}  weeks, ${days} days, ${hours} hours, ${mins} minuets, ${secs} seconds.`;

  return answer;
}

planetEcpectencyFromBday(planet){
let coarseSecs = this.fineLifeSpanLeftFromBdayTEST()
let x = 0;
if (planet == "Merc"){
  x = .24;
}else if (planet =="Ven"){
  x = .62;
} else if (planet == "Mar"){
  x = 1.88
} else if (planet == "Jup"){
  x = 11.86
}
let years = Math.floor(coarseSecs/(31536000 *x));
let weeks = Math.floor((coarseSecs % (31536000 * x)) / (604800 * x));
let days = Math.floor(((coarseSecs % (31536000 * x)) % (604800 * x)) / (86400 * x));
let hours = Math.floor((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) / (3600 * x));
let mins = Math.floor(((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) % (3600 * x))/(60 * x));
let secs = Math.floor(((((coarseSecs % (31536000 * x)) % (604800 * x)) % (86400 * x)) % (3600 * x))%(60 * x));
let answer = `${years} years ,${weeks}  weeks, ${days} days, ${hours} hours, ${mins} minuets, ${secs} seconds.`;

return answer;
}






}
