import {SpaceClock} from './clock.js';

roughYearsDiff(clock1, clock2){
  let earlier = clock1.makeDate();
  let later = clock2.makeDate();
  let milis  = later - earlier;
  let roughDiff = milis/31536000000;
  return roughDiff;
}
