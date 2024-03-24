import React from 'react';

function Media() {

  const logoStyle = {
    width: '80px', 
    height: 'auto', 
    marginBottom: '10px' 
  }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100vh', textAlign: 'center' }}>
      <div>
        <a href="">
          <img src="public/images/dexscreener.webp" alt="Dex Screener logo link" style={logoStyle}></img>
        </a>
      </div>
      <div>
        <a href="https://twitter.com/tatumtoken">
          <img src="public/images/x-logo.webp" alt="X Logo link" style={logoStyle}></img>
        </a>
      </div>
      <div>
        <a href="t.me/tatumtoken">
          <img src="public/images/telegram-logo.webp" alt="Dex Screener logo" style={logoStyle}></img>
        </a>
      </div>
    </div>
  );
}

export default Media;