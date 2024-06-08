var question1 = {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
};

document.getElementById("question").innerHTML = question1.question;
document.getElementById("option1").innerHTML = question1.options[0];
document.getElementById("option2").innerHTML = question1.options[1];
document.getElementById("option3").innerHTML = question1.options[2];
document.getElementById("option4").innerHTML = question1.options[3];

function checkAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        alert("Correct!");
    } else {
        alert("Sorry, that's not correct.");
    }
    question1();
}