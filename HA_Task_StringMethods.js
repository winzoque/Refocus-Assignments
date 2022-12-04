
function capsDetector(word){
    word = word.replace(/[a-z]/g, "").trim().charAt(0);
    console.log(word);
}

capsDetector("there is a storm coming to tHe east of the Philippines");