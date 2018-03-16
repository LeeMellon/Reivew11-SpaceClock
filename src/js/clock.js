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

  roughYears(){
    let now = new Date();
    let rYears = Math.floor((now - this.makeDate())/31536000000);
    return rYears;
  }

}
