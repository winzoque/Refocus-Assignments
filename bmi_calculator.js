function bmiCalculator(weight, height){
    let bmi = (weight/Math.pow(height, 2)).toFixed(2);
    console.log("Your BMI is: " + bmi + "\n");
    if (bmi <= 18.5) {
        console.log("You are underweight");
    } if (bmi > 18.5 && bmi < 25) {
        console.log("You are normal weight");
    } if (bmi >= 25 && bmi < 30) {
        console.log("You are overweight");
    } if (bmi >= 30) {
        console.log("You are obese");
    }
    return bmi;
}

var yourBMI = bmiCalculator(68, 1.651);//weight(Kg) & height(m)
