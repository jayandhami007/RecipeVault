import { useState } from "react";
import Card from "./Card";

const BrowseRecipes = () => {
  const [searchValue, setSearchValue] = useState("");
  const [browseRecipe, setBrowseRecipe] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state to track search action

  const getRecipeData = async () => {
    setHasSearched(true); // Set to true when search is initiated
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=c8e4d1d6b7e04519bb81cc13699407ff&number=14`
    );
    const recipeDetails = await response.json();
    setBrowseRecipe(recipeDetails.results);
  };

  return (
    <div className="container mt-5" style={{minHeight :"70vh"}}>
      <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search for Recipe..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="form-control w-50"
        />
        <button className="btn btn-dark" onClick={getRecipeData}>
          Search
        </button>
      </div>

      {browseRecipe.length > 0 ? (
        <div className="row">
          {browseRecipe.map((r) => (
            <div className="col-md-4 mb-4" key={r.id}>
              <Card r={r} />
            </div>
          ))}
        </div>
      ) : // Check if a search has been performed or not
      !hasSearched ? (
        <div className="no-recipes-message text-center">
          <h2>Search for any recipe you want!</h2>
          <p className="text-muted">
            Explore thousands of recipes by typing the ingredients or recipe
            name.
          </p>
        </div>
      ) : (
        <div className="no-recipes-message text-center">
          <h2>No recipes found!</h2>
          <p className="text-muted">
            Try searching for another recipe or ingredient to find something
            delicious.
          </p>
        </div>
      )}
    </div>
  );
};

export default BrowseRecipes;
