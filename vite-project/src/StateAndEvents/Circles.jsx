import { useState } from "react";

function ColorsCircles() {
  const [colors, setColors] = useState(["pink", "blue", "green"]);

  const [radius, setRadius] = useState("");
  console.log("ColorsCircles render", new Date());

  return (
    <div>
      <ColorForm Colors={colors} setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}
function ColorForm(props) {
  const { colors, setColors } = props;
  const [color, setColor] = useState("");

  console.log("ColorForm render", new Date());

  const onSubmit = () => {
    console.log("Button clicked");
    const clonedColors = structuredClone(colors);
    clonedColors.push(color);
    setColors(clonedColors);
    console.log(clonedColors);
  };

  return (
    <div>
      <label>Enter color:</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>Add Color</button>
    </div>
  );
}
function ColorList(props) {
  const { colors } = props;
  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;
