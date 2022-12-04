const str = "there is a storm coming to tHe east of the Philippines";
const capsDetector = str.replace(/[a-z]/g, "").trim();
let firstCaps = capsDetector.charAt(0);
console.log(firstCaps);

