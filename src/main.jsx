import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FormStorageProvider } from "./store/cardDetails-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormStorageProvider>
    <App />
  </FormStorageProvider>
);
