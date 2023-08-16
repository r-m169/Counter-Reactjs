import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const Main = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 counter">
      <div className="inner-container">
        <h2 className="text-center">{count}</h2>
        {showMessage && (
          <h4 className="text-center">you clicked {count} times</h4>
        )}
        <div className="d-flex gap-3 justify-content-center">
          <button onClick={handleIncrement} className="btn btn-success">
            +
          </button>
          <button onClick={handleDecrement} className="btn btn-danger">
            -
          </button>
          <button onClick={toggleMessage} className="btn btn-primary">
            {showMessage ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default Main;
