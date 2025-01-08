import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CuisineShimmer from "./CuisineShimmer";

const CuisinesSection = ({ cuisineName }) => {
  const { name } = useParams();
  const [cuisine, setCuisine] = useState(null);

  useEffect(() => {
    const getCuisines = async () => {
      let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=c8e4d1d6b7e04519bb81cc13699407ff&number=10`;
      const response = await fetch(url);
      const cuisineData = await response.json();
      setCuisine(cuisineData.results);
    };
    getCuisines();
  }, [name]);
  if (!cuisine){
    return <CuisineShimmer />
  }

  return (
    <div className="cuisine-details " style={{ margin: "3rem" }}>
      <h2 className="mx-5 mb-5 fw-bold">Explore {name} Flavors </h2>

      <div className="d-flex flex-wrap gap-4 justify-content-start mx-5 ">
        {cuisine.map((cuisine) => (
          <div className="card " style={{ width: "24rem" }} key={cuisine.id}>
            <img
              src={cuisine.image}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h6 className="card-title fw-bold">{cuisine.title}</h6>
              <p className="card-text">
                Description not available at the moment.
              </p>
              <Link
                to={`/recipe/${cuisine.id}`}
                className="btn text-white"
                style={{ backgroundColor: "#4CAF50" }}
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CuisinesSection;
