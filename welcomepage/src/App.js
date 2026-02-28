import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []);

  return (
    <div>
      <h2>Hello, user! Welcome to our site.</h2>
    </div>
  );
}

export default App;