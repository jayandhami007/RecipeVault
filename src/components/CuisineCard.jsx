const CuisineCard = ({ cuisine }) => {
  return (
    <div
      className="card d-flex flex-column align-items-center p-3 mx-4"
      style={{
        border: "none",
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      <img
        src={cuisine.img}
        alt={cuisine.name}
        style={{
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          objectFit: "cover",
        }}
      />
      <p className="mt-2">{cuisine.name}</p>
    </div>
  );
};

export default CuisineCard;
