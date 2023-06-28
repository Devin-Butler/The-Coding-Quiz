const questions = [
    {
        question: "What is index.html?",
        answers: [
            {text: "The file to customize a site", correct:false},
            {text: "The file to give function to the site with script", correct:false},
            {text: "The basic foundation of the site", correct:true},
            {text: "I don't know bruv...", correct:false},
        ]
        
    },
    {
        question: "What is reset.css?",
        answers: [
            {text: "The file that resets a browsers default styling", correct:true},
            {text: "The file that serves as the foundation", correct:false},
            {text: "The file that styles the site", correct:false},
            {text: "I still don't know bruv...", correct:false},
        ]
    }
 

];

const questionElement =  document.getElementById("question");
const answerButton =  document.getElementById("answer-button");
const nextButton =  document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();

