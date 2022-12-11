const calc = require("./bmi_calculator");

test("Checks if there are at least 3 albums in the Album Store", () => {
    expect(calc.yourBMI_UW).toBeLessThan(18.5);
});
test("Checks if there are at least 3 albums in the Album Store", () => {
    expect(calc.yourBMI_HW).toBeGreaterThanOrEqual(18.5);
});


//yourBMI_UW    Underweight
//yourBMI_HW    Healthy Weight
//yourBMI_OW    Overweight
//yourBMI_OB    Obesity
