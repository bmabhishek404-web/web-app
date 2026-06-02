// Main Quiz Application Logic

// Global state
let quizState = {
    selectedTopics: [],
    selectedDifficulty: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    score: 0,
    timeLimit: 120, // seconds
    timeRemaining: 120,
    timerInterval: null,
    answered: false
};

// Initialize application
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    }, 2000);
});

// Navigate to topic selection
function showTopicSelection() {
    switchScreen('welcomeScreen', 'topicScreen');
}

// Show welcome screen
function showWelcome() {
    switchScreen(null, 'welcomeScreen');
    resetQuiz();
}

// Switch between screens
function switchScreen(fromScreen, toScreen) {
    if (fromScreen) {
        document.getElementById(fromScreen).classList.remove('active');
    }
    document.getElementById(toScreen).classList.add('active');
}

// Toggle topic selection
function toggleTopic(element, topic) {
    const card = element.closest('.topic-card');
    card.classList.toggle('selected');
    
    if (quizState.selectedTopics.includes(topic)) {
        quizState.selectedTopics = quizState.selectedTopics.filter(t => t !== topic);
    } else {
        quizState.selectedTopics.push(topic);
    }
    
    updateStartButton();
}

// Select difficulty level
function selectDifficulty(difficulty) {
    quizState.selectedDifficulty = difficulty;
    
    // Update button states
    document.querySelectorAll('.btn-difficulty').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('selected');
    
    updateStartButton();
}

// Update start button state
function updateStartButton() {
    const btn = document.getElementById('startBtn');
    btn.disabled = !(quizState.selectedTopics.length > 0 && quizState.selectedDifficulty);
}

// Start quiz
function startQuiz() {
    if (quizState.selectedTopics.length === 0 || !quizState.selectedDifficulty) {
        alert('Please select at least one topic and a difficulty level');
        return;
    }
    
    // Load questions
    const allQuestions = [];
    quizState.selectedTopics.forEach(topic => {
        const topicQuestions = getQuestionsForQuiz(topic, quizState.selectedDifficulty, 10);
        allQuestions.push(...topicQuestions);
    });
    
    // Shuffle questions
    quizState.questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    quizState.answers = new Array(quizState.questions.length).fill(null);
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.answered = false;
    
    // Set time limit based on difficulty
    if (quizState.selectedDifficulty === 'easy') {
        quizState.timeLimit = 120; // 2 minutes per question
    } else {
        quizState.timeLimit = 240; // 4 minutes per question
    }
    quizState.timeRemaining = quizState.timeLimit;
    
    switchScreen('topicScreen', 'quizScreen');
    loadQuestion();
    startTimer();
}

// Load current question
function loadQuestion() {
    const question = quizState.questions[quizState.currentQuestionIndex];
    quizState.answered = false;
    
    // Update progress
    updateProgress();
    
    // Update difficulty badge
    const badge = document.getElementById('difficultyBadge');
    badge.textContent = quizState.selectedDifficulty.charAt(0).toUpperCase() + quizState.selectedDifficulty.slice(1);
    badge.className = `difficulty-badge ${quizState.selectedDifficulty}`;
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Clear feedback
    document.getElementById('feedbackArea').style.display = 'none';
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('label');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${index}" onchange="selectOption(${index})">
            <span class="option-text">${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submit Answer';
    submitBtn.onclick = submitAnswer;
    submitBtn.classList.remove('next-btn');
    
    // Select previously answered option if exists
    if (quizState.answers[quizState.currentQuestionIndex] !== null) {
        document.querySelector(`input[value="${quizState.answers[quizState.currentQuestionIndex]}"]`).checked = true;
    }
    
    // Restart timer
    clearInterval(quizState.timerInterval);
    quizState.timeRemaining = quizState.timeLimit;
    startTimer();
}

// Select option
function selectOption(index) {
    document.getElementById('submitBtn').disabled = false;
}

// Submit answer
function submitAnswer() {
    if (quizState.answered) {
        nextQuestion();
        return;
    }
    
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    
    const selectedIndex = parseInt(selectedOption.value);
    const question = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    quizState.answers[quizState.currentQuestionIndex] = selectedIndex;
    
    if (isCorrect) {
        quizState.score++;
    }
    
    quizState.answered = true;
    
    // Show feedback
    showFeedback(isCorrect, question);
    
    // Update score display
    document.getElementById('scoreDisplay').textContent = `${quizState.score}/${quizState.currentQuestionIndex + 1}`;
    
    // Update button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = quizState.currentQuestionIndex === quizState.questions.length - 1 ? 'Finish Quiz' : 'Next Question';
    submitBtn.classList.add('next-btn');
    submitBtn.onclick = () => {
        if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
            finishQuiz();
        } else {
            nextQuestion();
        }
    };
    
    // Disable options after answer
    document.querySelectorAll('.option input').forEach(input => {
        input.disabled = true;
    });
    
    // Clear timer
    clearInterval(quizState.timerInterval);
}

// Show feedback
function showFeedback(isCorrect, question) {
    const feedbackArea = document.getElementById('feedbackArea');
    const feedbackContent = document.getElementById('feedbackContent');
    
    feedbackContent.innerHTML = `
        <div class="feedback-item ${isCorrect ? 'correct' : 'incorrect'}">
            <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
            <p>${isCorrect ? 'Great job!' : 'The correct answer is: <strong>' + question.options[question.correct] + '</strong>'}</p>
            <p><strong>Explanation:</strong> ${question.explanation}</p>
        </div>
    `;
    
    feedbackArea.style.display = 'block';
}

// Next question
function nextQuestion() {
    quizState.currentQuestionIndex++;
    
    if (quizState.currentQuestionIndex < quizState.questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Finish quiz
function finishQuiz() {
    clearInterval(quizState.timerInterval);
    showResults();
    switchScreen('quizScreen', 'resultsScreen');
}

// Show results
function showResults() {
    const totalQuestions = quizState.questions.length;
    const correctAnswers = quizState.score;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update score display
    document.getElementById('finalScore').textContent = correctAnswers;
    document.getElementById('totalQuestions').textContent = `out of ${totalQuestions}`;
    
    // Update statistics
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    document.getElementById('percentageScore').textContent = `${percentage}%`;
    
    // Update nav
    document.getElementById('navScore').textContent = `Score: ${correctAnswers}/${totalQuestions}`;
    
    // Show performance review
    showPerformanceReview(percentage);
}

// Show performance review
function showPerformanceReview(percentage) {
    const performanceReview = document.getElementById('performanceReview');
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = '🎉 Excellent! You have mastered this topic. Outstanding performance!';
        messageClass = 'excellent';
    } else if (percentage >= 75) {
        message = '👏 Good job! You have a solid understanding of the concepts.';
        messageClass = 'good';
    } else if (percentage >= 60) {
        message = '📚 Average performance. Review the concepts and try again.';
        messageClass = 'average';
    } else {
        message = '💪 Keep learning! Focus on the weak areas and practice more.';
        messageClass = 'poor';
    }
    
    performanceReview.innerHTML = `
        <h3>Performance Summary</h3>
        <div class="performance-message ${messageClass}">
            ${message}
        </div>
    `;
}

// Retake quiz
function retakeQuiz() {
    switchScreen('resultsScreen', 'topicScreen');
    resetQuiz();
}

// Reset quiz state
function resetQuiz() {
    quizState = {
        selectedTopics: [],
        selectedDifficulty: null,
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        score: 0,
        timeLimit: 120,
        timeRemaining: 120,
        timerInterval: null,
        answered: false
    };
    
    // Reset UI
    document.querySelectorAll('.topic-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.btn-difficulty').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('startBtn').disabled = true;
    document.getElementById('navScore').textContent = 'Score: 0';
    document.getElementById('navTimer').textContent = 'Time: --:--';
}

// Timer functionality
function startTimer() {
    clearInterval(quizState.timerInterval);
    
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay();
        
        if (quizState.timeRemaining <= 0) {
            clearInterval(quizState.timerInterval);
            alert('Time is up! Moving to the next question.');
            submitAnswerOnTimeout();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(quizState.timeRemaining / 60);
    const seconds = quizState.timeRemaining % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeString;
    
    // Update nav timer
    document.getElementById('navTimer').textContent = `Time: ${timeString}`;
    
    // Change color based on time remaining
    if (quizState.timeRemaining <= 30) {
        timerElement.classList.add('critical');
        timerElement.classList.remove('warning');
    } else if (quizState.timeRemaining <= 60) {
        timerElement.classList.add('warning');
        timerElement.classList.remove('critical');
    } else {
        timerElement.classList.remove('warning', 'critical');
    }
}

// Submit answer on timeout
function submitAnswerOnTimeout() {
    if (!quizState.answered) {
        const question = quizState.questions[quizState.currentQuestionIndex];
        quizState.answered = true;
        
        // Mark as unanswered
        quizState.answers[quizState.currentQuestionIndex] = -1;
        
        // Move to next question
        if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
            setTimeout(() => nextQuestion(), 1000);
        } else {
            setTimeout(() => finishQuiz(), 1000);
        }
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressPercentage').textContent = `${Math.round(progress)}%`;
    document.getElementById('questionNum').textContent = `Question ${quizState.currentQuestionIndex + 1} of ${quizState.questions.length}`;
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !document.getElementById('submitBtn').disabled) {
        submitAnswer();
    }
    
    // Number keys for option selection
    const optionNum = parseInt(e.key);
    if (optionNum >= 1 && optionNum <= 4) {
        const option = document.querySelector(`input[value="${optionNum - 1}"]`);
        if (option) {
            option.click();
        }
    }
});

// Responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        // Mobile adjustments
    }
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden && quizState.timerInterval) {
        // Page is hidden
    } else if (!document.hidden && quizState.timerInterval) {
        // Page is visible again
    }
});

// Prevent accidental page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    if (quizState.currentQuestionIndex > 0 && quizState.currentQuestionIndex < quizState.questions.length) {
        e.preventDefault();
        e.returnValue = '';
    }
});
