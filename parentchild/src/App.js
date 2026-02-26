import React, { useState } from 'react';
import LightSwitch from './Child';

function Room()
{
  const [OnorOff,setIsOn] = useState(0);
  
  function toggleLight()
  {
    setIsOn(!OnorOff);
  }

  return (
    <div>
      <h1>{OnorOff ? "The room is bright" : "The room is dark"}</h1>

      <LightSwitch 
        OnorOff={OnorOff} 
        toggleLight={toggleLight} 
      />
    </div>
  );
}

export default Room;