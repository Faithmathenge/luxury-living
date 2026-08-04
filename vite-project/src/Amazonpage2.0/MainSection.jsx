import ItemCard from "./Itemcard";
import data from "./assets/data";

function MainSection() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((item, index) => (
        <ItemCard
          key={index}
          description={item.description}
          amount={item.amount}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default MainSection;
