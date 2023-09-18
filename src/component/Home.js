import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const questions = [
    {
      question: 'Shekinah has 5 apples. She gives 2 apples to her friend. How many apples does Sarah have now?',
      options: ['1', '2', '3', '5'],
      answer: '3',
    },
    {
      question: 'There are 8 birds on a tree. 3 birds fly away. How many birds are left on the tree?',
      options: ['2', '3', '5', '8'],
      answer: '5',
    },
    {
      question: 'Tom has 10 pencils. He loses 4 pencils. How many pencils does Tom have now?',
      options: ['2', '4', '6', '10'],
      answer: '6',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleFinishQuiz = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setShowScore(true);
  };

  return (
    <>
      <div className="homeContainer">
        {showScore ? (
          <div className="scoreContainer">
            <h1 className="score">
              Your Score:
              {score}
              {' '}
              /
              {questions.length}
            </h1>
          </div>
        ) : (
          <>
            <h1 className="welcome">Welcome, have fun with these questions !</h1>
            <div className="quizContainer">
              <h2 className="question">{questions[currentQuestion].question}</h2>
              <div className="optionsContainer">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`option ${selectedOption === option ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="buttonsContainer">
                <button
                  className="previousButton"
                  type="button"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button
                  className="nextButton"
                  type="button"
                  onClick={currentQuestion === questions.length - 1
                    ? handleFinishQuiz : handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
