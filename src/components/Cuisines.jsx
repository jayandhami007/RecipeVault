import { Link } from "react-router-dom";
import CuisineCard from "./CuisineCard";
import { allCuisines } from "../data";

const Cuisines = () => {
  const cuisines = allCuisines;

  return (
    <div className="cuisines  " style={{ margin: "3rem" }}>
      <h4 className="mx-5 ">What's cooking in your mind today?</h4>
      <div
        className="cuisines-cards  d-flex mx-5 "
        style={{
          padding: "20px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
        }}
      >
        {cuisines.map((cuisine, index) => (
          <Link to={`/cuisines/${cuisine.name}`}  key={index} className="text-decoration-none">
            <CuisineCard cuisine={cuisine} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
