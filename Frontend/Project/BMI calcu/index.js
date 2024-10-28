function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
   
    const bmi = (weight / (height * height)).toFixed(2);
    
    let resultMessage ;
  
    if (bmi < 18.5) {
      resultMessage = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 25) {
      resultMessage = `Your BMI is ${bmi}. You have a normal weight.`;
    } else if (bmi > 25 && bmi <= 29.9) {
      resultMessage = `Your BMI is ${bmi}. You are overweight. `;
    } else {
      resultMessage = `Your BMI is ${bmi}. You are obese.`;
    }
  
    document.getElementById('result').textContent = resultMessage;
  }