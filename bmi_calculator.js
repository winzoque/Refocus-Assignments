function bmiCalculator(weight, height){
    let bmi = (weight/Math.pow(height, 2)).toFixed(2);
    console.log("Your BMI is: " + bmi);
    if (bmi < 18.5) {
        console.log("You are Underweight\n");
    } if (bmi >= 18.5 && bmi < 25) {
        console.log("You are Healthy Weight\n");
    } if (bmi >= 25 && bmi < 30) {
        console.log("You are Overweight\n");
    } if (bmi >= 30) {
        console.log("You are Obese\n");
    }
    return bmi;
}
//weight(Kg) & height(m)
var yourBMI = bmiCalculator(65, 1.651); //Healthy Weight
var yourBMI = bmiCalculator(45, 1.651); //Underweight
var yourBMI = bmiCalculator(65, 1.5);   //Overweight
var yourBMI = bmiCalculator(65, 1.4);   //Healthy Weight

//BMI               Weight Status
//================================
//Below 18.5	    Underweight
//18.5 – 24.9	    Healthy Weight
//25.0 – 29.9	    Overweight
//30.0 and Above	Obese
