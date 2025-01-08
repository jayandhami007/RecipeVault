import { Link } from "react-router-dom";
const Card = ({ r }) => {
  return (
    <div className="card" >
      <img
        src={r.image}
        className="card-img-top" 
        alt="..."
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title fw-bold">{r.title}</h6>
        <p className="card-text">Description not available at the moment.</p>
        <Link to={`/recipe/${r.id}`} className="btn text-white" style={{backgroundColor:"#4CAF50"}}>
          View Recipe
        </Link>
      </div>
    </div>
  );
};
export default Card;
