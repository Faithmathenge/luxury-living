function parent() {
  const str = "Hello Fay";
  const amount = 2000;
  const isOk = true;
  const notset = null;

  const car = {
    model:  "porche Cayyane",
    manufacture: "porshe",
    engine: {
      cc: 3000,
    }
  };

  const colors = ["green", "black", "white"];

  return (
    <div>
      <h1>I am a parent component</h1>
      <Child1 str={str} amountInNumber={amount} isOk={isOk} notset={notset} />
      <Child2 str={str} amountInNumber={amount} isOk={isOk} notset={notset} />
      <Child3 str={str} amountInNumber={amount} isOk={isOk} notset={notset} />
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am a child component</h1>
      <ul>
        <li>
          Favorite string <b>{props.str}</b>
        </li>

        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>

        <li>
          isOk <b>{props.isOk}</b>
        </li>

        <li>
          isOk <b>{String(props.isOk) + ""}</b>
          {/* For booleans convert them to string before displaying */}
        </li>

        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

function Child2(props) {
  const { str, amountInNumber, isOk, notSet } = props;
  console.log(str, amountInNumber, isOk, notSet);
  return (
    <div>
      <h1>I am a child 2 component</h1>
      <ul>
        <li>
          Favorite string <b>{props.str}</b>
        </li>

        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>

        <li>
          isOk <b>{props.isOk}</b>
        </li>

        <li>
          isOk <b>{String(props.isOk) + ""}</b>
          {/* For booleans convert them to string before displaying */}
        </li>

        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

function Child3(props) {
  const { str, amountInNumber, isOk, notSet } = props;
  console.log(str, amountInNumber, isOk, notSet);
  return (
    <div>
      <h1>I am a child 2 component</h1>
      <ul>
        <li>
          Favorite string <b>{props.str}</b>
        </li>

        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>

        <li>
          isOk <b>{props.isOk}</b>
        </li>

        <li>
          isOk <b>{String(props.isOk) + ""}</b>
          {/* For booleans convert them to string before displaying */}
        </li>

        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

export default parent;
