import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WorkbookApp } from "./components/workbook/app";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WorkbookApp />
  </StrictMode>,
);
