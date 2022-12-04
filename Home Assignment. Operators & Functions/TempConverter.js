//Fahrenheit to Kelvin
function FconvertToKelvin(tempFahrenheit){
    let tempCKelvin = ((tempFahrenheit - 32) / 1.8) + 273.15;
    return tempCKelvin;
}

//Celsius to Kelvin
function CconvertToKelvin(tempCelsius){
    let tempFKelvin = tempCelsius + 273.15;
    return tempFKelvin;
}

console.log(CconvertToKelvin(30) + "K converted from Celsius"); //Celsius to Kelvin
console.log(FconvertToKelvin(86) + "K converted from Fahrenheit"); //Fahrenheit to Kelvin