import React from "react";

const FeaturedRecipeCard = ({ recipe }) => {
  return (
    <div className="card featured-recipe-card " style={{ width: "18rem" }}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="card-img-top"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title fw-bold">{recipe.title}</h6>
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
