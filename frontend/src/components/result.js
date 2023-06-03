import "../styles/Result.css";
import React from "react";
/*definește o componentă funcțională Result care primește prop-urile score și message.
 Aceasta returnează un element <div> care conține scorul și mesajul rezultatului.*/
const Result = ({ score, message }) => {
    return (
      <div>
        <div className="content">
        <h1 className="score">result: {score} %</h1>
        <p className="message">
        {message.message}
        </p>
          
        </div>
      </div>
    );
  };
  
  export default Result;


  /*Componenta Result primește prop-urile score și message și le utilizează pentru a afișa scorul și mesajul în interiorul elementului <div> cu clasa CSS "content".
  Scorul este afișat într-un element <h1> cu clasa CSS "score", iar mesajul este afișat într-un element <p> cu clasa CSS "message".*/