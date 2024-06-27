import React from "react";
import "./App.scss";
import Main from "./containers/Main";

async function loadSites() {
const URLs = [`https://full-stack-blog-8d2e.onrender.com/api/health`, `https://full-stack-chirper.onrender.com/api/health` ];

for (const url of URLs) {
  fetch(url).catch(console.error)
}
}

loadSites();

function App() {

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
