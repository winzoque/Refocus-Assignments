const bmiCalculator = require("./bmi_calculator");

test("Checks if BMI Calculator to be close to 23.85", () => {
    expect(bmiCalculator(65, 1.651)).toBeCloseTo(23.85);
});

test("Checks if BMI Calculator to be close to 16.51", () => {
    expect(bmiCalculator(45, 1.651)).toBeCloseTo(16.51);
});

test("Checks if BMI Calculator to be close to 28.89", () => {
    expect(bmiCalculator(65, 1.5)).toBeCloseTo(28.89);
});

test("Checks if BMI Calculator to be close to 33.16", () => {
    expect(bmiCalculator(65, 1.4)).toBeCloseTo(33.16);
});

// Your BMI is: 23.846201538556922
// You are Healthy Weight
// Your BMI is: 16.508908757462486
// You are Underweight
// Your BMI is: 28.88888888888889
// You are Overweight
// Your BMI is: 33.163265306122454
// You are Obese

