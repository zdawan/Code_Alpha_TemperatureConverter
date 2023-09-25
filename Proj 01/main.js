function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemp;
    
    // Invaild Input
    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        alert("Oops! You are looking the result on same Unit. \n Please change it");
        return;
    }


    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9 / 5) + 32;
    }
    if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = (inputTemp + 273.15);
    }
    if (fromUnit === "celsius" && toUnit === "rankine") {
        convertedTemp = (inputTemp + 273.15) * 1.8;
    }

    // Reverse Operation of above task (F)
    if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5 / 9;
    }
    if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
    }
    if (fromUnit === "fahrenheit" && toUnit === "rankine") {
        convertedTemp = (inputTemp + 459.67);
    }

    // Reverse Operation of above task (K)
    if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 273.15);
    }
    if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9 / 5) - 459.67;
    }
    if (fromUnit === "kelvin" && toUnit === "rankine") {
        convertedTemp = (inputTemp * 1.8);
    }

    // Reverse Operation of above (R)
    if (fromUnit === "rankine" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 491.67) * 5 / 9;
    }
    if (fromUnit === "rankine" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp - 459.67);
    }
    if (fromUnit === "rankine" && toUnit === "kelvin") {
        convertedTemp = (inputTemp / 1.8);
    }

    document.getElementById("outputTemp").value = convertedTemp.toFixed(10);    // no.of Float values to be displayed
}