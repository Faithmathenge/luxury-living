import Navigate from "./Navigation";
import MainSection from "./MainSection";
import SideBar from "./SideBar";

function AmazonPage() {
  return (
    <div>
      <Navigate />
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}

export default AmazonPage;
