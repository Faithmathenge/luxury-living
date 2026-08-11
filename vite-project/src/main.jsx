import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Routing from "./Routing";
import GithubProject from "./GithubProject";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubProject />
    <Routing />
  </StrictMode>,
);

