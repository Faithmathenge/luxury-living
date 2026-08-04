import logo from "./assets/logo.png";

function Navigation() {
  return (
    <div className="nav">
      <img src={logo} width="120px" />
      <input placeholder="Search Amazon" />
    </div>
  );
}

export default Navigation;
