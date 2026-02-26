import React from 'react';
function LightSwitch(props)
{
  function handleClick()
  {
    props.toggleLight();
  }

  return (
    <div>
      <button onClick={handleClick}>
        {props.OnorOff ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default LightSwitch;