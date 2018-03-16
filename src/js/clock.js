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

  closeDiff(clock2){
  let a = this.makeDate();
  let b = clock2.makeDate();
  let coarseSecs = (a - b)/1000;
  let years = Math.floor(coarseSecs/31536000);
  let weeks = Math.floor((coarseSecs % 31536000) / 640800);
  let days = Math.floor(((coarseSecs % 31536000) % 640800) / 86400);
  let hours = Math.floor((((coarseSecs % 31536000) % 640800) % 86400) / 3600);
  let mins = Math.floor(((((coarseSecs % 31536000) % 640800) % 86400) % 3600)/60);
  let secs = Math.floor(((((coarseSecs % 31536000) % 640800) % 86400) % 3600)%60);
  let answer = `years ${years}, weeks ${weeks}, days ${days}, hours ${hours} minuets ${mins} seconds ${secs}`;

  return answer;
}


}
