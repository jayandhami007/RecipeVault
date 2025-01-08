import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="d-flex justify-content-around align-items-center"
      style={{ height: "16vh", backgroundColor: "#4CAF50" }}
    >
      <Link to="/" className="d-flex align-items-center text-decoration-none">
        <h4 className=" text-white fw-bold">RecipeVault</h4>
      </Link>
      <div className="nav-links">
        <ul className="d-flex gap-4 list-unstyled m-0">
          <li>
            <Link to="/" className="text-decoration-none text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-decoration-none text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="text-decoration-none text-white ">
              Browse Recipes
            </Link>
          </li>
          <li>
            <Link to="" className="text-decoration-none text-white">
              Favourites
            </Link>
          </li>
          <li>
            <Link to="" className="text-decoration-none text-white">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
