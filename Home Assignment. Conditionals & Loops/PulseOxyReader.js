var oxilevel = 97;
var pulserate = 66;

function oxilevelreader (oxilevel){
    if ((oxilevel >= 96)&&(oxilevel <= 100)){
        console.log ("Your SpO2 is Normal.");
    }
    else if ((oxilevel === 95)){
        console.log ("Your SpO2 is Acceptable to continue home monitoring.");
    }
    else if ((oxilevel <= 94)&&(oxilevel >= 93)){
        console.log ("Your SpO2 is Not normal, please seek advice from health professionals.");
    }
    else if ((oxilevel <= 92)&&(oxilevel >= 0)){
        console.log ("Warning! Your SpO2 is Not normal, please seek urgent medical advice.");
    }
    else {
        console.log ("Error! You SpO2 value is undefined.");
    }
}

function pulseratereader (pulserate){
    if ((pulserate >= 40)&&(pulserate <=100)){
        console.log ("Normal Reading.");
    }
    else if ((pulserate >= 101)&&(pulserate <=109)){
        console.log ("Your Pulse Rate is Acceptable to continue home monitoring.");
    }
    else if ((pulserate >= 110)&&(pulserate <= 130)){
        console.log ("Your Pulse Rate is Not normal, please seek advice from health professionals.");
    }
    else if ((pulserate >= 131)){
        console.log ("Warning! Your Pulse Rate is Not normal, please seek urgent medical advice.");
    }
    else {
        console.log ("Error! You Pulse Rate value is undefined.");
    }
}

oxilevelreader(oxilevel);
pulseratereader(pulserate);