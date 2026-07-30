import logo from "./Assets/logo.png";

function Navigate() {
  return (
    <div className="nav">
      <img src={logo} width="60px" />
      <input placeholder="Search" />
    </div>
  );
}

export default Navigate;
