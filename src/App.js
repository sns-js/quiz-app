import React, { useState } from 'react';

import './App.css';

function App() {
  const questions =
    [{
      questionText: 'Who is the messenger?',
      answerOptions: [
        { answerText: 'A', isCorrect: false },
        { answerText: 'Muhammad(SAW)', isCorrect: true },
        { answerText: 'C', isCorrect: false },
        { answerText: 'D', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the shape of the Earth?',
      answerOptions: [
        { answerText: 'Spherical', isCorrect: true },
        { answerText: 'flat', isCorrect: false },
        { answerText: 'pentagon', isCorrect: false },
        { answerText: 'circle', isCorrect: false },
      ]
    },
    {
      questionText: 'Which is the hottest planet in our galaxy?',
      answerOptions: [
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Neptune', isCorrect: false },
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Venus', isCorrect: true },
      ]
    },
    {
      questionText: 'Who is a physicist?',
      answerOptions: [
        { answerText: 'Einstein', isCorrect: true },
        { answerText: 'Tagore', isCorrect: false },
        { answerText: 'Modi', isCorrect: false },
        { answerText: 'Zayed', isCorrect: false },
      ]
    }
    ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

  }
  const restart = ()=> {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }
  const exit = ()=> {
    setShowScore(true);
  }

  return (
    <div className="App">
      {showScore ? (<div>You scored {score} out of {questions.length}
      <button onClick={restart} className='action-button'>start again?</button></div>
       ) :
      (<>
        <div className="questionCount">
          <span>{currentQuestion + 1} / {questions.length}</span>
        </div>
        <div className="questionText">
          <p> {questions[currentQuestion].questionText}</p>
        </div>
        <div className="answerText">
          {questions[currentQuestion].answerOptions.map(answerOption => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        <button className='actionButton' onClick={restart}> Restart </button>
        <button className='actionButton' onClick={exit}> Exit </button>
      </>
      )}

  </div>
  )}
export default App;
