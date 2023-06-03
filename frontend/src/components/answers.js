import Answer from "./answer.js";



/*definește un component funcțional Answers care primește answers și onAnswerCheck ca proprietăți.
 Acesta mapează fiecare răspuns din array-ul answers și returnează un component Answer pentru fiecare răspuns.*/
export default function Answers({ answers ,onAnswerCheck}) {
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        key = {answer.id}
        onAnswerCheck = {onAnswerCheck}
        {...answer}
      />
    );
  });

  return (
    <div className="answers-div">
      {answerElements}
    </div>
  );
}

/*Componenta Answers utilizează array-ul answers pentru a crea o listă de componente Answer, trimițând fiecare răspuns ca proprieate.
Proprietatea onAnswerCheck este pasată de asemenea către fiecare componentă Answer.
Componenta Answers returnează div-ul cu clasa CSS "answers-div" care conține lista de componente Answer.*/
