function BMI()
{
    let heightInput = document.getElementById('height').value;
    let weightInput = document.getElementById("weight").value;
    bmicalculater(heightInput,weightInput);
}

function bmicalculater(heightInput,weightInput){
    
    let BMI, height, weight,msg;

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight / height ** 2;

    
    if (BMI < 18.5) 
    {
        msg = "BMI is Underweight";
    }
     else if (BMI > 18.5 && BMI < 24.9) 
    {
        msg = "BMI is Normal weight";
    } 
    else if (BMI > 25 && BMI < 29.9) 
    {
        msg = "BMI is overweight";
    } 
    else if(BMI > 30)
    {
        msg = "BMI is Obesity";
    }
    else 
    {
        msg = "ERROR: Enter the correct data";
    }

    document.getElementById('ans').innerHTML = msg;

}