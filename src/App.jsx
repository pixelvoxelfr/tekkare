import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoleculesList, {
  loader as loaderMoleculesList,
} from "./components/pages/molecules/MoleculesList";
import MoleculePage, {
  loader as loaderMolecule,
} from "./components/pages/molecules/MoleculePage";
import { elements } from "chart.js";

const router = createBrowserRouter([
  {
    path: "/tekkare",
    children: [
      { index: true, elements: <MoleculesList />, loader: loaderMoleculesList },
      {
        path: "molecules",
        element: <MoleculesList />,
        loader: loaderMoleculesList,
      },
      {
        path: "molecule/:index",
        element: <MoleculePage />,
        loader: loaderMolecule,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
