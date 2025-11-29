// -------------------------------
// Quiz Questions Array
// -------------------------------
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which does DOM stand for?", answer: "document object model" },
    { question: "What is the largest ocean in world?", answer: "pacific ocean" },
    { question: "Who is known as the father of computers?", answer: "charles babbage" },
    { question: "Which language is the most spoken in world?", answer: "english" }
];

// -------------------------------
// Function to Run the Quiz
// -------------------------------
function runQuiz() {
    let score = 0;  // Initialize score

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (!userAnswer) {
            alert("You did not enter anything!");
            continue;
        }

        userAnswer = userAnswer.toLowerCase().trim();  // Normalize input

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ✔");
        } else {
            alert("Wrong . Correct answer is: " + quizQuestions[i].answer);
        }
    }

    // Final Score
    alert("Quiz Finished!\nYour Score: " + score + " out of " + quizQuestions.length);
}

// -------------------------------
// Start the Quiz
// -------------------------------
runQuiz();
