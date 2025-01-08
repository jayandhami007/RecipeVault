const Footer = () => {
  return (
    <footer className="text-light py-5" style={{ backgroundColor: "#4CAF50" }}>
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold mb-3">About Us</h5>
            <p>
              RecipeVault is your go-to app for discovering delicious recipes
              and culinary tips. Join our community of food enthusiasts and
              explore a variety of recipes from around the world.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold mb-3">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Favourites
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase font-weight-bold mb-3">Contact Us</h5>
            <p className="text-muted">
              <i className="bi bi-envelope"></i>{" "}
              <a
                href="mailto:jayandhami007@gmail.com"
                className="text-light text-decoration-none"
              >
                jayandhami007@gmail.com
              </a>
            </p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-light">
              &copy; {new Date().getFullYear()} RecipeVault. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
