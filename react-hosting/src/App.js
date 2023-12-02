//App.js 
import { Route, Link, Routes } from "react-router-dom";

//routing components
import Home from "./page/Home";
import Router1 from "./page/Router1";
import Router2 from "./page/Router2";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
        <p>
          <Link to="/">홈</Link>
        </p>
        <p>
          <Link to="/r1">Router1</Link>
        </p>
        <p>
          <Link to="/r2">Router2</Link>
        </p>
        </div>

        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/r1" element={<Router1 />} />
          <Route path="/r2" element={<Router2 />} />
        </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
