
import React from "react";

export default function Question({ question }) {
  return (
    <>
      <h1 className="question">{question}</h1>
    </>
  );
}

/* definește o componentă funcțională Question care primește propria question.
Aceasta returnează un element <h1> care afișează întrebarea.*/

/*Componenta Question primește prop-urile și le utilizează pentru a afișa întrebarea în interiorul elementului <h1> cu clasa CSS "question".*/
