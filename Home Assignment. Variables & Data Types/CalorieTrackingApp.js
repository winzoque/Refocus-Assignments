let calperhr = 450;
let cyclingdays = 15;
let hrcyclingtime = 0.5;

let totalhrcycling = cyclingdays * hrcyclingtime;
let totalcalburned = totalhrcycling * calperhr;

console.log(`Great work, Sam! After ${hrcyclingtime} hours of cycling everyday for a week, you may lose a total of ${totalcalburned} calories.`);
