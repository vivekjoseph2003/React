import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    if (user !== "Guest") {
      console.log(`User changed to ${user}`);
    }
  }, [user]);

  const handleLogin = () => {
    setUser("Alice");
  };

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={handleLogin}>Login as Alice</button>
    </div>
  );
}

export default App;