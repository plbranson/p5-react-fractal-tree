import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div>Name: .</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"))
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
