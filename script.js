const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-btn');
const resetButton = document.getElementById('reset-btn');
const resultParagraph = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    const temperatureValue = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    let convertedTemperature;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
         javascript
        convertedTemperature = temperatureValue * 9/5 + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedTemperature = temperatureValue + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemperature = (temperatureValue - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedTemperature = (temperatureValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedTemperature = temperatureValue - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedTemperature = (temperatureValue - 273.15) * 9/5 + 32;
    }

    resultParagraph.textContent = `${temperatureValue} ${fromUnit} is equal to ${convertedTemperature.toFixed(2)} ${toUnit}`;
});

resetButton.addEventListener('click', () => {
    temperatureInput.value = '';
    fromUnitSelect.value = 'celsius';
    toUnitSelect.value = 'celsius';
    resultParagraph.textContent = '';
});