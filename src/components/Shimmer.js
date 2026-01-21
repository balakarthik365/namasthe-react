import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-header">
            <p className="shimmer-img"></p>
          </div>
          <div className="shimmer-body">
            <h2>&nbsp;</h2>
            <p>&nbsp;</p>
          </div>
          <div className="shimmer-footer">
            <p>&nbsp;</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
