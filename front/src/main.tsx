import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  );

 // Если необходимо измерять производительность, можно передать функцию для логирования результатов
// Например, можно использовать функцию reportWebVitals(console.log) или отправить результаты на аналитический сервис.
  reportWebVitals();
} else {
  console.error("Unable to find root element");
}
