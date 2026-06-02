// Quiz Data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2,
        difficulty: "Easy"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        difficulty: "Easy"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        difficulty: "Easy"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Mark Twain"],
        correct: 2,
        difficulty: "Medium"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
        difficulty: "Medium"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2,
        difficulty: "Medium"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2,
        difficulty: "Hard"
    },
    {
        question: "Which physicist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correct: 1,
        difficulty: "Hard"
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        correct: 2,
        difficulty: "Medium"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        difficulty: "Easy"
    }
];

// State Management
let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let timeRemaining = 30;
let timerInterval;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    displayQuizInfo();
});

function displayQuizInfo() {
    document.getElementById('totalQuestions').textContent = `Total Questions: ${quizData.length}`;
    const difficulties = [...new Set(quizData.map(q => q.difficulty))];
    document.getElementById('totalDifficulty').textContent = `Difficulty Levels: ${difficulties.join(', ')}`;
}

function hideScreen(screenId) {
    const screen = document.getElementById(screenId);
    screen.classList.remove('active');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    showScreen('quizScreen');
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${index}" 
                   ${userAnswers[currentQuestion] === index ? 'checked' : ''}
                   onchange="selectAnswer(${index})">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgressBar();
    updateButtonStates();
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    document.querySelectorAll('.option').forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        timeRemaining = 30;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finish' : 'Next';
}

function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = 30;
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').textContent = timeRemaining + 's';
        
        if (timeRemaining <= 10) {
            document.getElementById('timer').classList.add('warning');
        }
        
        if (timeRemaining <= 0) {
            nextQuestion();
        }
    }, 1000);
}

function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    
    showResults();
}

function showResults() {
    showScreen('resultsScreen');
    document.getElementById('finalScore').textContent = score;
    
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🎉 Perfect Score! You are a Quiz Master!';
    } else if (percentage >= 80) {
        message = '🌟 Excellent! You did great!';
    } else if (percentage >= 60) {
        message = '👍 Good job! You passed the quiz!';
    } else if (percentage >= 40) {
        message = '📚 Keep learning! Practice makes perfect!';
    } else {
        message = '💪 Better luck next time! Keep practicing!';
    }
    
    document.getElementById('scoreMessage').textContent = message;
    displaySummary();
}

function displaySummary() {
    const summaryDiv = document.getElementById('resultsSummary');
    summaryDiv.innerHTML = `
        <div class="summary-item">
            <span>Total Questions:</span>
            <span>${quizData.length}</span>
        </div>
        <div class="summary-item">
            <span>Correct Answers:</span>
            <span>${score}</span>
        </div>
        <div class="summary-item">
            <span>Incorrect Answers:</span>
            <span>${quizData.length - score}</span>
        </div>
        <div class="summary-item">
            <span>Accuracy:</span>
            <span>${Math.round((score / quizData.length) * 100)}%</span>
        </div>
    `;
}

function reviewAnswers() {
    showScreen('reviewScreen');
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const statusIcon = isCorrect ? '✓' : '✗';
        const statusText = isCorrect ? 'Correct' : 'Incorrect';
        
        let content = `
            <div class="review-question">${statusIcon} Question ${index + 1}: ${question.question}</div>
        `;
        
        if (userAnswer !== null) {
            content += `
                <div class="review-answer user">
                    <strong>Your Answer:</strong> ${question.options[userAnswer]}
                </div>
            `;
        }
        
        if (!isCorrect) {
            content += `
                <div class="review-answer correct">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
            `;
        } else {
            content += `
                <div class="review-answer correct">
                    <strong>Great!</strong> You selected the correct answer.
                </div>
            `;
        }
        
        reviewItem.innerHTML = content;
        reviewContainer.appendChild(reviewItem);
    });
}

function backToResults() {
    showScreen('resultsScreen');
}

function restartQuiz() {
    showScreen('welcomeScreen');
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    clearInterval(timerInterval);
    document.getElementById('timer').classList.remove('warning');
}