    function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid height & weight.');
        return;
    }

    // Convert height from cm to metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);
    const bmivalue = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5 ) {
        category = "Underweight"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight"
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    document.getElementById('bmi-value').textContent = bmivalue;
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('result').style.display = "block";
}

