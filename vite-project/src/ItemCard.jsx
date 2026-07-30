function ItemCard() {
  const description =
    "A durable jump rope designed to improve cardio, burn calories, and boost agility. Lightweight, adjustable, and perfect for home or gym workouts.";
  const amount = "KES 2,000";

  // React application: primitives (datatypes: strings, booleans, numbers)

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          border: "2px solid rgba(0,0,0,0.2)",
          padding: "2px 4px 2px 4px",
          margin: "10px",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            width={"200px"}
            src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UF1000,1000_QL80_.jpg"
          />
        </div>

        <div style={{ textAlign: "left", fontSize: "16px" }}>{description}</div>

        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{amount}</div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              border: "2px solid rgba(0,0,0,0.3)",
              padding: "2px 4px 2px 4px",
              color: "white",
              backgroundColor: "orange",
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
