import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Survey.css'
const questions = [
  {
    questionText: "Please choose an option below",
    options: [
      "I prefer to maintain a professional relationship with my physician.",
      "I like to establish a personal connection with my physician.",
      "I do not have a strong preference.",
    ],
  },
  {
    questionText: "How do you prefer to receive updates from your physician?",
    options: [
      "Via phone calls",
      "Through emails",
      "Text messages",
      "In person",
    ],
  },
  {
    questionText: "How frequently do you prefer check-up appointments?",
    options: [
      "Monthly",
      "Quarterly",
      "Biannually",
      "Annually",
    ],
  },
  {
    questionText: "What additional services would you find helpful?",
    options: [
      "Extended office hours",
      "Same-day appointments",
      "Specialist referrals",
      "Wellness workshops",
    ],
  },
  {
    questionText: "What is your preferred method of payment for appointments?",
    options: [
      "Credit/Debit card",
      "Insurance",
      "Cash",
      "Online payment",
    ],
  },
];

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  };

  const handleSubmit = () => {
    console.log("Survey answers:", answers);
    alert("Survey submitted!");
  };

  return (
    <div className="survey-card">
      <div className="survey-container">
        <header className="survey-header">
          <p>This survey is designed to identify patients that will best fit your medical practice personality.</p>
        </header>
        <div className="survey-progress">
          <p>
            {currentQuestion + 1} / {questions.length}
          </p>
        </div>
        <div className="survey-question">
          <p>{questions[currentQuestion].questionText}</p>
          <ul className="survey-options">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="survey-option-item">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={handleOptionChange}
                  className="survey-radio"
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="survey-navigation">
          <button onClick={handlePrevious} disabled={currentQuestion === 0} className="survey-button">
            Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNext} className="survey-button">Next</button>
          ) : (
            <Link to='/Appointment'>
              <button onClick={handleSubmit} className="survey-button submit-button">
                Submit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
