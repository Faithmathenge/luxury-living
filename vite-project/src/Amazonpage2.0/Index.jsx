import "./Index.css";

import Navigation from "./Navigation";
import Sidebar from "./SideBar";
import MainSection from "./MainSection";

function AmazonPage2() {
  return (
    <>
      <Navigation />

      <div className="container">
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
}

export default AmazonPage2;
