import React from "react";
import useMouseMove from '../hooks/useMouseMove'

const MouseTracker = () => {
  const coords = useMouseMove()

  return (
    <div>
      The mouse is currently at
      <code>
        {`{ x: ${coords.x}, y: ${coords.y} }`}
      </code>
    </div>
  );
}

export default MouseTracker;
