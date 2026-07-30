import FilterList from "./FilterList.jsx";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        flexDirection: "column",
      }}
    >
      <FilterList />
      <FilterList />
      <FilterList />
      <FilterList />
      <FilterList />
      <FilterList />
      <FilterList />
      <FilterList />
    </div>
  );
}

export default SideBar;
