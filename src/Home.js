import React, { useState } from 'react';
import './App.css';
import AppCode from './App.js'; // Import the content of App.js
import './Home.css';
import happyBirthdaySong from './song.mp3'; // Import your song file
import buttonImage from './cake.png'; // Import your button image

function Home() {
  const [showText, setShowText] = useState(true);
  const [showAppCode, setShowAppCode] = useState(false);

  const handleButtonClick = () => {
    setShowText(false); // Hide the text
    setShowAppCode(true);
    playSong();
  };

  const playSong = () => {
    const audio = new Audio(happyBirthdaySong);
    audio.loop = true; // Set loop property to true for infinite playback
    audio.play();
  };

  return (
    <div className="home-container">
      <div className="center-content">
        {showText && (
          <div className="text-container">
            <p className="text-above-button">Click here, birthday boy!</p>
            <button onClick={handleButtonClick} className="custom-button">
              <img src={buttonImage} alt="Button Image" className="button-image" />
            </button>
          </div>
        )}
        {showAppCode && <AppCode />} {/* Conditionally render App code */}
      </div>
    </div>
  );
}

export default Home;
