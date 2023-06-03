import "./styles/App.css";
import React from "react";
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";
import Result from "./components/result";
import Webimage from "./components/Webimage";

class App extends React.Component {
  state = {
    questions: [],//întrebări preluate din questions.js
    answeredQuestion: 0, //ține evidența indexului întrebării afișate în prezent
    started: false,//ține evidența dacă testul a început deja
    finished: false, //ține evidența dacă testul s-a încheiat deja
    score: 0, //suma ponderilor întrebărilor la care s-a răspuns
    grade: 0,
    message: "", //rezultat portret pentru testul curent
    readyForNext: false, //true când este bifată o singură casetă de selectare
  };
// preia întrebările când utilizatorul face clic pe start
  startTest = async () => {
    const data = await fetch("/data");
    const questions = await data.json();
    this.setState({ questions: questions }, () => {
      console.log(this.state.questions.length);
    });
    this.setState({ started: true });
  };
  // se apeleaza când utilizatorul face clic pe butonul următor
  toNextQuestion = async (index) => {
    console.log("index");
    console.log(index);

    //eliminarea butonul next cind se trece la urmatoarea intrebare
    this.setState({ readyForNext: false });


    /*verifică dacă răspunsul este corect și actualizează scorul și nota în funcție de acest lucru*/
    const answer = this.checkedAnswer();
    console.log(answer);
    if (answer.value === "correct") {
      console.log("correct");
      this.setState({ score: this.state.score + 1 }, () => {
        console.log(this.state.score);
        this.setState(
          { grade: (this.state.score * 100) / this.state.questions.length },
          () => {
            console.log(this.state.grade);
          }
        );
      });
    }

    /* actualizează starea "answeredQuestion" pentru a reprezenta indexul întrebării curente.
    Dacă există alte întrebări disponibile, indexul este incrementat cu 1, altfel rămâne la valoarea indexului curent.*/
    this.setState(
      {
        answeredQuestion:
          this.state.answeredQuestion < this.state.questions.length
            ? index + 1
            : index,
      },
      () => {
        console.log(this.state.answeredQuestion);
      }
    );

/*
actualizează starea "finished" în funcție de numărul de întrebări răspunse.
Dacă numărul de întrebări răspunse este egal cu numărul total de întrebări minus 1 (adică ultima întrebare),
atunci starea "finished" este setată la "true", altfel este setată la "false".
* */
    this.setState(
      {
        finished:
          this.state.answeredQuestion === this.state.questions.length - 1
            ? true
            : false,
      },

        /*callback care este apelată după ce starea "finished" este actualizată.
        În această funcție, se afișează un mesaj în consolă și se verifică dacă valoarea stării "finished" este true.
         Dacă este true, se apelează metoda getMessage().*/

      () => {
        console.log("finished: " + this.state.finished);
        if (this.state.finished === true) {
          this.getMessage();
        }
      }
    );
  };
/*definește o metodă getMessage care face o cerere asincronă către /results/:grade și primește un răspuns JSON.
 Acest răspuns JSON este stocat în starea message.
* */
  getMessage = async () => {
    const messageData = await fetch("/results/:" + this.state.grade);
    const messageJson = await messageData.json();
    this.setState({ message: messageJson });
    console.log(this.state.messageJson);
  };

 /* definește o funcție checkedAnswer care caută elementele de tip checkbox cu clasa CSS "answer-checkbox" și returnează primul element care este bifat.
  Dacă nu există niciun checkbox bifat, funcția returnează null.
*/
  checkedAnswer = () => {
    let radios = document.getElementsByClassName("answer-checkbox");
    for (let index = 0; index < radios.length; index++) {
      const radio = radios[index];
      if (radio.checked) return radio;
    }
    return null;
  };

/*definește o metodă onAnswerCheck care actualizează starea readyForNext în funcție de numărul de întrebări răspunse.
Dacă numărul de întrebări răspunse este mai mic decât numărul total de întrebări, atunci starea readyForNext este setată la true, altfel este setată la false.*/
  onAnswerCheck = () => {
    this.setState({
      readyForNext:
        this.state.answeredQuestion < this.state.questions.length
          ? true
          : false,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.questions.length > 0 && !this.state.finished && (
          <QuestionBundle
            question={this.state.questions[this.state.answeredQuestion]}
            onAnswerCheck={this.onAnswerCheck}
          />
        )}
        {this.state.finished && (
          <div className="App">
            <Result message={this.state.message} score={this.state.grade} />
          </div>
        )}
        {!this.state.started && <Webimage />}
        {!this.state.finished && (
          <Buttons
            onStart={this.startTest}
            onNext={this.toNextQuestion}
            started={this.state.started}
            checked={this.state.readyForNext}
            answeredQuestionIndex={this.state.answeredQuestion}
          />
        )}
      </div>
    );
  }
}
/*reprezintă metoda render() a componentei tale. În funcție de starea curentă a quiz-ului, se afișează diferite componente și elemente de interfață.

Dacă există întrebări disponibile și quiz-ul nu este finalizat (!this.state.finished), se afișează componenta QuestionBundle care primește întrebarea curentă și metoda onAnswerCheck pentru a gestiona verificarea răspunsului.
Dacă quiz-ul este finalizat (this.state.finished), se afișează componenta Result care primește mesajul și scorul pentru a fi afișate.
Dacă quiz-ul nu a început (!this.state.started), se afișează componenta Webimage care poate reprezenta o imagine de fundal sau alt conținut.
Dacă quiz-ul nu este finalizat (!this.state.finished), se afișează componenta Buttons care conține butoanele de pornire și următoarele întrebări.
Aceasta primește metodele startTest și toNextQuestion, precum și alte proprietăți pentru a gestiona starea și afișarea butoanelor.*/


export default App;

