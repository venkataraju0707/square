import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Square & Circle</h1>

      
      <div className="square" style={styles.square}>
        
        <div className="circle" style={styles.circle}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
  },
  square: {
    width: "200px",
    height: "200px",
    backgroundColor: "#3498db",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: "120px",
    height: "120px",
    backgroundColor: "#e74c3c",
    borderRadius: "50%",
  },
};
