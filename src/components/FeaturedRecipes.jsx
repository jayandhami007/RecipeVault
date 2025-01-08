import { useEffect, useState } from "react";
import FeaturedRecipeCard from "./FeaturedRecipeCard";
import { Link } from "react-router-dom";

const FeaturedRecipes = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  useEffect(() => {
    getFeaturedRecipes();
  }, []);

  const getFeaturedRecipes = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=c8e4d1d6b7e04519bb81cc13699407ff&number=8"
    );
    const featuredRecipeData = await response.json();
    setFeaturedRecipes(featuredRecipeData.recipes);
  };
  return (
    <div
      className="featured-recipes-section "
      style={{ borderTop: "1px solid black ", margin: "3rem" }}
    >
      <h4 className=" mx-5 my-3 ">Popular Flavors Around the World</h4>
      <div className="d-flex flex-wrap justify-content-start gap-4 m-5 ">
        {featuredRecipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-decoration-none"
            key={recipe.id}
          >
            <FeaturedRecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FeaturedRecipes;
