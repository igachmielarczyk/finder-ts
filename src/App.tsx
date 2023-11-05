import Services from "./components/Services";
import { getServices } from "./data";

// import style
import "./style/app.scss";

function App() {
  const services = getServices();

  return (
    <div className="App">
      <Services tiles={services} />
    </div>
  );
}

export default App;
