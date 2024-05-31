document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelection').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(tempInput)) {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.classList.add('show');
        return;
    }

    const temperature = parseFloat(tempInput);
    let result = '';

    if (unit === 'Celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature} °C = ${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'Fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        result = `${temperature} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'Kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result = `${temperature} K = ${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    resultDiv.textContent = result;
    resultDiv.classList.add('show');
});
