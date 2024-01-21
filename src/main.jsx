import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
