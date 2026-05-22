import React, { useState, useEffect } from "react";

function App() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Show first component after 1 second
    const timer1 = setTimeout(() => {
      setShowComponent1(true);
    }, 1000);

    // Show second component after 2 seconds
    const timer2 = setTimeout(() => {
      setShowComponent2(true);
    }, 2000);

    // Show third component after 3 seconds
    const timer3 = setTimeout(() => {
      setShowComponent3(true);
    }, 3000);

    // Update elapsed time every 100ms for display
    const timerInterval = setInterval(() => {
      setElapsedTime((prev) => prev + 0.1);
    }, 100);

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎯 useEffect - Display Components After Interval</h1>
      
      <div style={timerStyle}>
        <p>Elapsed Time: <strong>{elapsedTime.toFixed(1)}s</strong></p>
      </div>

      {showComponent1 && (
        <div style={boxStyle}>
          <h2>✅ Component 1</h2>
          <p>Displayed after 1 second</p>
        </div>
      )}

      {showComponent2 && (
        <div style={{ ...boxStyle, backgroundColor: "#2196F3" }}>
          <h2>✅ Component 2</h2>
          <p>Displayed after 2 seconds</p>
        </div>
      )}

      {showComponent3 && (
        <div style={{ ...boxStyle, backgroundColor: "#FF9800" }}>
          <h2>✅ Component 3</h2>
          <p>Displayed after 3 seconds</p>
        </div>
      )}

      <div style={infoStyle}>
        <h3>How this works:</h3>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>useEffect runs once on component mount (empty dependency array)</li>
          <li>setTimeout schedules state updates at specific intervals</li>
          <li>Components conditionally render based on their state</li>
          <li>Cleanup function clears timers to prevent memory leaks</li>
        </ul>
      </div>
    </div>
  );
}

const boxStyle = {
  padding: "20px",
  margin: "15px auto",
  width: "300px",
  backgroundColor: "#4CAF50",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const timerStyle = {
  padding: "15px",
  margin: "20px auto",
  width: "300px",
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
};

const infoStyle = {
  marginTop: "40px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "40px auto",
  border: "1px solid #ddd",
};

export default App;
