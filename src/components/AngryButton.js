import { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);

  return (
    <button
      className="AngryButton"
      style={{ backgroundColor: `rgb(255,0,0,${anger})` }}
    >
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
