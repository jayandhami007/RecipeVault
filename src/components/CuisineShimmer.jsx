const CuisineShimmer = () => {
  return (
    <div className="card placeholder-glow" style={{ width: "24rem" }}>
      <div
        className="placeholder card-img-top"
        style={{
          width: "100%",
          height: "220px",
          backgroundColor: "#e0e0e0",
        }}
      ></div>
      <div className="card-body">
        <h6 className="card-title placeholder col-6"></h6>
        <p className="card-text placeholder col-7"></p>
        <a
          href="#"
          className="btn placeholder col-4"
          style={{ backgroundColor: "#e0e0e0" }}
        ></a>
      </div>
    </div>
  );
};
export default CuisineShimmer;
