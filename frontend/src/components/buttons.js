import "../styles/Buttons.css";
import React from "react";

/*definește clasa Buttons care extinde React.Component.
 Aceasta are o stare internă care include proprietățile started, answeredQuestion și checked.
  De asemenea, definește două metode: start și next.*/
class Buttons extends React.Component {
  state = { started: false, answeredQuestion: 0 , checked: false};
  start = (event) => {
    this.setState({ started: true });
    this.props.onStart(this.state.started);
  };
  next = (event) => {
    this.setState({ answeredQuestion: this.state.answeredQuestion + 1 });
    this.props.onNext(this.state.answeredQuestion);
  };
/*Metoda start setează starea started la true și apelează metoda onStart trimisă ca proprieate.

Metoda next actualizează starea answeredQuestion prin adăugarea valorii 1 la indexul curent și apelează metoda onNext trimisă ca proprieate*/



  render() {
    let myDiv = (
        <div className="buttons-div">
        {this.state.started === false &&
        <button id= 'start-button' started={this.started} onClick={this.start}>
          start
        </button>
        }
        {this.props.checked &&
          <button id= 'next-button' answeredquestion={this.answeredQuestion} onClick={this.next}>
            next
          </button>
          }
        </div>
      );
    

    return <div className="buttons">{myDiv}</div>;
  }
}
/*reprezintă metoda render() a clasei Buttons.
În funcție de starea started și prop-urile primite, se afișează butoanele "Start" și "Next".*/
/*În div-ul cu clasa CSS "buttons", se afișează conținutul variabilei myDiv, care conține butoanele
"Start" și "Next" în funcție de starea started și prop-urile primite (checked).*/

export default Buttons;



