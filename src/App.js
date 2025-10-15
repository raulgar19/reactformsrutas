import "./App.css";
import MenuRutas from "./components/MenuRutas";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <MenuRutas />
      <h1>Index principal</h1>
      <hr />
      <Router />
      <hr />
      <h2>Pie de página</h2>
    </div>
  );
}

export default App;
