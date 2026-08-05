function Mapping() {
  const numbers = [2, 3, 20, 30, 32];

  let x = numbers.forEach((element) => {
    console.log("Element is", element);
    return "this is n";
  });

  console.log(x);

  const powersOfNumber = numbers.map((n) => {
    console.log("this is", n);
    return n * n;
  });

  const justMap = numbers.map(() => "cats and dogs");

  console.log(powersOfNumber);
  console.log(justMap);

  const colors = ["green", "yellow", "blue", "black"];

  function singleColor(c, i) {
    if (i === 1) {
      return null;
    }

    return (
      <div key={i}>
        for index <b>{i}</b> color is <b>{c}</b>
      </div>
    );
  }

  return (
    <div>
      <h1>Mapping colors</h1>

      <h4>using arrow function</h4>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            for index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h4>using direct arrow function</h4>
      {colors.map((c, i) => (
        <div key={i}>
          for index <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h4>using anonymous function</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>using referencing the function</h4>
      {colors.map(singleColor)}

      <h4>using a component</h4>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}
    </div>
  );
}

function SingleColorComponent(props) {
  const { c, i } = props;

  return (
    <div>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;
