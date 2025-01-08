import bannerImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "80vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 className="text-white fw-bold">
          Discover & Cook Delicious Recipes
        </h1>
        <p className="text-white text-center fw-medium s">
          Find your next favorite meal!
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
