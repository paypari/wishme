import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowBirthdayWish(true), 5000);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <div className="header">
        {showMessage && ( 
          <h1 style={{ fontSize: '3rem', color: 'red', textAlign: 'center' , fontFamily:'Aclonica'}}>
            <WordByWordAnimation words={['Happy', 'Birthday', 'Babu']} />
          </h1>
        )}
      </div>
      {showBirthdayWish && (
        <div className="center-content">
          <div className="birthday-wish">
            <ParagraphAnimation text="I  wish you a very happy birthday, Babu. I hope you get whatever you desire. I'm lucky to have someone as thoughtful, caring, and handsome as you. I wish God gives you a long and healthy life." />
          </div>
        </div>
      )}
    </div>
  );
}

function WordByWordAnimation({ words }) {
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextWord = words[displayedWords.length];
      if (nextWord) {
        setDisplayedWords([...displayedWords, nextWord.split('')]);
      }
    }, 500); 

    return () => clearTimeout(timeout);
  }, [displayedWords, words]);

  return (
    <>
      {displayedWords.map((word, index) => (
        <span key={index}>
          {word.map((char, charIndex) => (
            <span key={charIndex} style={{ animationDelay: `${charIndex * 0.1}s` }}>
              {char}
            </span>
          ))}
          {index < displayedWords.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}

function ParagraphAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText(prevText => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayedText}</p>;
}

export default App;
