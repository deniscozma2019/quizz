import React from "react";
import Question from "./question";
import Answers from "./answers";
/*definește componenta funcțională QuestionBundle care primește prop-urile question și onAnswerCheck.
 Aceasta returnează un element <div> care conține componentele <Question> și <Answers>.*/
const QuestionBundle = ({ question, onAnswerCheck }) => {
  return (
    <div>
      <div className="content">
        <Question question={question.question}/>
        <Answers onAnswerCheck = {onAnswerCheck} answers={question.answers} />
      </div>
    </div>
  );
};

export default QuestionBundle;

/*Componenta QuestionBundle primește prop-urile question și onAnswerCheck și le transmite mai departe către componentele <Question> și <Answers>.
 Astfel, întrebarea și lista de răspunsuri sunt afișate într-un <div> cu clasa CSS "content".*/
