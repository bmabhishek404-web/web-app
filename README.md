# Quiz Master Application

A fully interactive web-based quiz application built with HTML, CSS, and vanilla JavaScript.

## Features

✨ **Core Features:**
- 10 engaging multiple-choice questions
- Real-time timer (30 seconds per question)
- Progress bar showing quiz completion
- Immediate score calculation
- Beautiful, responsive design
- Mobile-friendly interface

🎯 **User Experience:**
- Welcome screen with quiz overview
- Interactive question navigation (previous/next)
- Option highlighting for selected answers
- Countdown timer with visual warning
- Detailed results screen with accuracy metrics
- Answer review feature to learn from mistakes

📊 **Question Categories:**
- Easy: Geography, Space, Nature
- Medium: History, Language, Science
- Hard: Physics, Mathematics

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click "Start Quiz" to begin

## How to Use

1. **Welcome Screen**: Review quiz details and click "Start Quiz"
2. **Quiz Screen**: 
   - Read the question carefully
   - Select your answer by clicking on an option
   - Use "Previous" and "Next" buttons to navigate
   - Watch the timer for time remaining
3. **Results Screen**: 
   - View your final score and accuracy
   - Review the detailed summary
   - Click "Review Answers" to see all questions and answers
4. **Review Screen**: 
   - Check each question with your answer vs. correct answer
   - Go back to results or restart

## Scoring System

- **100%**: Perfect Score! 🎉
- **80-99%**: Excellent! 🌟
- **60-79%**: Good job! 👍
- **40-59%**: Keep learning! 📚
- **Below 40%**: Keep practicing! 💪

## Customization

To add your own questions, edit the `quizData` array in `script.js`:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 2,  // Index of correct answer (0-3)
    difficulty: "Easy"  // Easy, Medium, or Hard
}
```

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - Quiz logic and interactivity
- `README.md` - Documentation

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- [ ] Local storage to save progress
- [ ] Category selection
- [ ] Difficulty level filter
- [ ] Leaderboard system
- [ ] Question shuffle option
- [ ] Multiple quiz packs
- [ ] User authentication
- [ ] Backend API integration

## License

This project is open source and available for personal and commercial use.

---

**Enjoy the Quiz! 🎓**
