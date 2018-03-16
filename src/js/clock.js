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




}
