function EMI() {

    let amount = parseInt(document.getElementById("amount").value);
    let rate = parseInt(document.getElementById("rate").value);
    let months = parseInt(document.getElementById("months").value);

    calculate(amount,rate,months);
}

function calculate(amount,rate,months)
{
    let interest = (amount * (rate * 0.01)) / months;
     
    let total = ((amount / months) + interest).toFixed(2);
 
    document.getElementById("total").innerHTML = "EMI : (₹)" + total;
}