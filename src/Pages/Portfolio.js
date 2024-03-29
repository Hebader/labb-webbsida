import React, { useState, useEffect } from 'react';
import "./Portfolio.css";
import Påskägg2 from "../Components/Påskägg2";

export default function Portfolio() {
  


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://api.github.com/users/Hebader/repos') 
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false); 
      })
      .catch(error => console.error('Kunde inte läsa data'));
  }, []);

  return (
    
    <div className="container">
      <div className="column">
        <h1>Portfolio - Mina GitHub-projekt</h1>
        <Påskägg2/>
      </div>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="projekt-lista">
          {posts.map((post) => (
            <Post key={post.id} {...post} description={post.description} />
          ))}
        </ul>
      )}
    </div>
  );
}

const Post = ({ name, description, html_url }) => {
  return (
    <li className="projekt">
      <h2>{name}</h2>
      <div className="column">
       
      <a href={html_url} className="info-button" target="_blank" rel="noopener noreferrer">
  {description ? description + " - " : ""}Mer information
        </a>
        <div className="modal">
          <h2>{name}</h2>
          <p>{description}</p>
       
        </div>
      </div>
    </li>
  );
}