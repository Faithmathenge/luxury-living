import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AmazonPage from "./AmazonPage/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>,
);
