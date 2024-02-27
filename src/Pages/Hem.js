import React from 'react';
import './Hem.css';

export default function Hem () {
  return (
    <>
      <body>
        <main>
          <section className="background-image">
          <img src={process.env.PUBLIC_URL + '/bilder/bakgrund.jpg'} alt="bakgrund" />
            <h1 className="centered-text">Välkommen till min hemsida</h1>
          </section>
        </main>
      </body>
      <footer>
        <p>© 2024 Heba Derawi</p>
      </footer>
    </>
  );
};


