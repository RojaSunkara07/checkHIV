import React, { useState } from "react";
import "../Styles/SelfAssessment.css";

function Question({ question, options }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="question-container">
      <div className="question-text">{question}</div>
      {options.map((option, index) => (
        <label key={index} className="option-text">
          <input
            type="radio"
            name={`question-${index}`}
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

function Assessment() {
  const questions = [
    {
      question: "1. Gender:",
      options: ["Male", "Female", "Other", "Prefer Not to Say"],
    },
    {
      question: "2. Have you ever tested HIV positive before?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "3. Have you shared needles or other drug injection equipment with others?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "4. Have you been diagnosed with or treated for any sexually transmitted infections (STIs) recently?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "5. Have you engaged in unprotected vaginal, anal, or oral sex with a new partner or multiple partners since your last HIV test?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "6. Are you aware of your partner's HIV status?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "7. Have you experienced any unexplained weight loss, chronic diarrhea, prolonged fever, or night sweats?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "8. Have you had swollen lymph nodes, particularly in the neck, armpit, or groin area?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
    {
      question: "9. Have you noticed any significant changes in your skin, nails, or mucous membranes?",
      options: ["Yes", "No", "Prefer Not to Say"],
    },
  ];

  return (
    <div className="assessment-container">
      <h1 className="assessment-title">
        Have a quick <span className="assessment-highlight">Assessment</span>
      </h1>
      <h1 className="assessment-title">Assess your HIV risk</h1>
      {questions.map((q, index) => (
        <Question key={index} question={q.question} options={q.options} />
      ))}
      <button type="button">Submit</button>
    </div>
  );
}

export default Assessment;
