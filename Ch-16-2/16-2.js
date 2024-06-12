console.log("Start Code...");

try {
    let ans = a / b;
    console.log("Answer : ", ans);
}
catch (val) {
    if (val.name == "ReferenceError") {
        console.log("Variable are not Declared...");
    }
    else if (val.name == "TypeError") {
        console.log("you are not using string/Datatype");
    }
    else {
        console.log("Exception :", val.name);
    }
}
console.log("End Code...");