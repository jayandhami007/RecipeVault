import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=c8e4d1d6b7e04519bb81cc13699407ff`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipeDetail(data);
    };
    fetchRecipeDetail();
  }, [id]);

  if (!recipeDetail) {
    return <Shimmer />;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">{recipeDetail.title}</h2>
      <img
        src={recipeDetail.image}
        alt={recipeDetail.title}
        className="img-fluid mb-4"
      />
      <h4 className="fw-bold">Ingredients</h4>
      <ul>
        {recipeDetail.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h4 className="fw-bold">Instructions</h4>
      <p>{recipeDetail.instructions}</p>
      <h4>Servings: {recipeDetail.servings}</h4>
      <h4>Ready in: {recipeDetail.readyInMinutes} minutes</h4>
    </div>
  );
};

export default RecipeDetail;
