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
const answerButtons =  document.getElementById("answerbuttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function   resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function  showScore(){
    resetState();
    questionElement.innerHTML = 'You scored', $(score), 'out of', $(questions.lenghth);
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

