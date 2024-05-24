function ageCalculator() {
    let person_age = document.getElementById("DOB").value;
    let dob = new Date(person_age);

    if(person_age==null || person_age=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";   
    } 
    else 
    {
    
    //calculate month
    let month = Date.now() - dob;
    
    //convert 
    let age_dt = new Date(month); 
    
    //extract year from date    
    let year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    let age = (year - 1970);
    
    //display the calculated age
    return document.getElementById("result").innerHTML =  
        "Age is: " + age + " years. ";
    }
}