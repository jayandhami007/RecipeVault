import React from "react";

const Shimmer = () => {
  return (
    <div className="container mt-5">
      {/* Title Placeholder */}
      <div className="placeholder-glow mb-4">
        <h2 className="placeholder col-6"></h2>
      </div>

      {/* Image Placeholder */}
      <div className="placeholder-glow mb-4">
        <div className="placeholder col-12" style={{ height: "300px" }}></div>
      </div>

      {/* Ingredients Placeholder */}
      <h4>Ingredients</h4>
      <ul>
        <li className="placeholder-glow">
          <span className="placeholder col-8"></span>
        </li>
        <li className="placeholder-glow">
          <span className="placeholder col-7"></span>
        </li>
        <li className="placeholder-glow">
          <span className="placeholder col-9"></span>
        </li>
      </ul>

      {/* Instructions Placeholder */}
      <h4>Instructions</h4>
      <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
        <span className="placeholder col-10"></span>
        <span className="placeholder col-11"></span>
      </p>

      {/* Additional Details Placeholder */}
      <div className="placeholder-glow mt-4">
        <h4 className="placeholder col-4"></h4>
        <h4 className="placeholder col-4"></h4>
      </div>
    </div>
  );
};

export default Shimmer;
