function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Create a mapping object for conversion factors
    const conversionFactors = {
        celsius: {
            fahrenheit: (temp) => (temp * 9 / 5) + 32,
            kelvin: (temp) => temp + 273.15,
            rankine: (temp) => (temp + 273.15) * 1.8,
        },
        fahrenheit: {
            celsius: (temp) => (temp - 32) * 5 / 9,
            kelvin: (temp) => (temp - 32) * 5 / 9 + 273.15,
            rankine: (temp) => temp + 459.67,
        },
        kelvin: {
            celsius: (temp) => temp - 273.15,
            fahrenheit: (temp) => (temp * 9 / 5) - 459.67,
            rankine: (temp) => temp * 1.8,
        },
        rankine: {
            celsius: (temp) => (temp - 491.67) * 5 / 9,
            fahrenheit: (temp) => temp - 459.67,
            kelvin: (temp) => temp / 1.8,
        },
    };

    // Check if conversion is possible
    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        alert("Oops! \n You are looking the result on same Unit.\n Please change it");
        return;
    }

    const convertedTemp = conversionFactors[fromUnit][toUnit](inputTemp);

    document.getElementById("outputTemp").value = convertedTemp.toFixed(10);
}
