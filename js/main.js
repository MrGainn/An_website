function checkAnswers() {

    var answer1 = document.getElementById('q1').value.trim().toLowerCase();
    var answer2 = document.querySelector('input[name="q2"]:checked');
    var answer3 = document.querySelector('input[name="q3"]:checked');
    var answer4 = document.getElementById('q4').value;
    var answer5 = document.querySelector('input[name="q5"]:checked');
    var answer6 = document.querySelector('input[name="q6"]:checked');
    var answer7 = document.querySelector('input[name="q7"]:checked');
    var answer8 = document.querySelector('input[name="q8"]:checked');
    var answer9 = document.querySelector('input[name="q9"]:checked');
    var answer10 = document.querySelector('input[name="q10"]:checked');
    var answer11 = document.querySelector('input[name="q11"]:checked');

    var correctAnswer1 = "2022-03-12";

    var correctAnswer2 = "b";
    var correctAnswer3 = "a";
    var correctAnswer4 = "6"; 
    var correctAnswer5 = "a";
    var correctAnswer6 = "c";
    var correctAnswer7 = "d";
    var correctAnswer8 = "a";

    var correctAnswer9 = "d";
    var correctAnswer10 = "b";
    var correctAnswer11 = "d";
    var score = 0;

    if (answer1 === correctAnswer1) {
        score++;
    }
    if (answer2 !== null && answer2.value === correctAnswer2) {
        score++;
    }
    if (answer3 !== null && answer3.value === correctAnswer3) {
        score++;
    }
    if (answer4 === correctAnswer4) {
        score++;
    }
    if (answer5 !== null && answer5.value === correctAnswer5) {
        score++;
    }
    if (answer6 !== null && answer6.value === correctAnswer6) {
        score++;
    }
    if (answer7 !== null && answer7.value === correctAnswer7) {
        score++;
    }

    if (answer8 !== null && answer8.value === correctAnswer8) {
        score++;
    }
    if (answer9 !== null && answer9.value === correctAnswer9) {
        score++;
    }
    if (answer10 !== null && answer10.value === correctAnswer10) {
        score++;
    }
    if (answer11 !== null && answer11.value === correctAnswer11) {
        score++;
    }
    if (score == 11){
        window.location.href = "reward.html";
    }
    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Je hebt er ${score} goed van de 11 :(`;
}
