import "./App.css";
import Molecules from "./components/pages/Molecules";
import data from "./data/molecules.json";

async function App() {
  return (
    <>
      <Molecules molecules={data} />
    </>
  );
}

export default App;
