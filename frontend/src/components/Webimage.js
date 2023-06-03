import "../styles/Webimage.css";
import React from "react";
import pic from "../images/Start.jpg"

/*definește o componentă funcțională Webimage care primește prop-urile source și alt.
 Aceasta returnează un element <img> cu sursa și atributul alt corespunzătoare.*/
export default function Webimage({source, alt}) {
  return (
    
    <>
      <img src = {pic} alt = "exam" id ="Webimage-start-image" data-testid= "webimage1"/>
      <aria-label htmlFor= "Webimage-start-image" id ="Webimage-start-image-label"></aria-label>
      </>
  
  );
}
/*Componenta Webimage primește sursa imaginii (source) și textul alternativ (alt) și le utilizează pentru a afișa imaginea în interiorul elementului <img>.
De asemenea, se specifică un atribut id și data-testid pentru identificarea și testarea componentei.*/
