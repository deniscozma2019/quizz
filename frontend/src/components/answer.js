import "../styles/Answer.css";
import React from "react";


const Answer = (props) => {
  const handleCheck = (event) => {
    props.onAnswerCheck();
  };
  /* definește componenta Answer care reprezintă un răspuns în cadrul unui quiz.
        Componenta primește props ca argument și utilizează acestea pentru a afișa elementele corespunzătoare.*/
  return (
    <div className="answer-div">
      <input 
        className="answer-checkbox"
        type="radio"
        id={props.id}
        data-testid = {props.id}
        name={"radio"}
        value={props.result}
        onClick={(event) => {
          handleCheck(event);
        }}

      />
      <label className = "answer-label" htmlFor={props.answer}>{props.answer}</label>
    </div>
  );
};
export default Answer;
/*Componenta Answer afișează un element input de tip radio cu clasa CSS "answer-checkbox" și un label asociat.
Atunci când utilizatorul face clic pe un răspuns, se apelează funcția handleCheck care la rândul său apelează metoda onAnswerCheck trimisă prin prop-uri.*/
