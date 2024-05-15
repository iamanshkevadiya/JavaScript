function getGrade(){
    let marks = document.getElementById('marks').value;
    let msg;

    if(marks<=100 && marks>=81)
        {
            msg = "Congratulation You Got A Grade.";
        }
    else if(marks<=80 && marks>=61)
        {
            msg = "You Got B Grade.";
        }
    else if(marks<=60 && marks>=41)
        {
            msg = "You Got C Grade.";
        }
    else if(marks<=40 && marks>=34)
        {
            msg = "Pass..";
        }
    else
        {
            msg = "Better Luck For Next Time."
        }

    document.getElementById('value').innerHTML = msg;
}