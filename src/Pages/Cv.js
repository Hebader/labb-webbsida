import React from 'react';
import './cv.css';
import Bookdata from "../enkeldata.json";
import Påskägg from "../Components/Påskägg";

 export function Cv () {
  return (
    <>
  <Påskägg/>
 
      <main>
        <div className="container">
          <div className="left-column">
            <h1>CV- Heba Derawi</h1>
            <figure className="column">
            <img src={process.env.PUBLIC_URL + '/bilder/jag2.jpg'} alt="bild på mig" />
            </figure>
          </div>

          <div className="right-column">
            <section>
              <h2>Kontaktuppgifter</h2>
              <p>
                1995 11 23 <br />
                Malmövägen 23 <br />
                85730 Sundsvall <br />
                0736449569 <br />
                Heba.derawi95@hotmail.com
              </p>
            </section>

            <section>
    <h2>Erfarenhetsbredd</h2>
    <p>
        Jag har i de tidigare jobben arbetat mycket med människor, både äldre, ungdomar och barn.
        Detta har utvecklat min förmåga att förstå andra människor,
        samt att samarbeta med andra.
    </p>
</section>
<section>
    <h2>Styrkor/Främre egenskaper</h2>
    <ul>
        <li>Lärd att hantera stress så jag kan hålla ett glatt humör uppe.</li>
        <li>Har stort intresse av att jobba med andra människor.</li>
        <li>Kunnig inom att utföra jobben på ett säkert och stabilt sätt.</li>
        <li>Jag är noggrann när det kommer till att se efter ett par gånger ifall allt är som det ska, de uppgifter jag påbörjar avslutar jag alltid effektivitet.</li>
        <li>Lätt att kommunicera med mig och komma överens.</li>
        <li>Jag skulle beskriva mig själv som en självständig, social, pålitlig, trevlig, och ansvarsfull person.</li>
    </ul>
</section>
<section>
      <h2>Utbildningar</h2>
      {Bookdata.Utbildningar.map((utbildning_) => (
        <div key={utbildning_.id}>
         <p>Utbildning: {utbildning_.utibildning}</p>
          <p>År: {utbildning_.år}</p>
          <p>Utbildningsföretag: {utbildning_.utbildningsföretag} </p>
          <br />
                </div>
              ))}
              
  </section>

  <section>
      <h2>Anställningar</h2>
      {Bookdata.Ansträllningar.map((ansträllning_) => (
        <div key={ansträllning_.id}>
         <p>Tjänst: {ansträllning_.tjänst}</p>
          <p>År: {ansträllning_.år}</p>
          <p>Arbetsplats: {ansträllning_.arbetsplats} </p>
          <br />
                </div>
              ))}
              
  </section>

<section>
    <h2>Språk</h2>
    <ul>
        <li>Svenska - Flytande</li>
        <li>Engelska - Flytande</li>
        <li>Arabiska - Flytande</li>
    </ul>
</section>
          </div>


        </div>
      </main>
      
      <footer>
        <p>© 2024 Heba Derawi</p>
      </footer>
    </>
  );
};

export default Cv;