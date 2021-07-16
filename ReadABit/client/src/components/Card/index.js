import React from "react";

function Card({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="card text-white bg-dark mb-3 mt-3"
    >
      {children}
    </div>
  );
}

export default Card;
