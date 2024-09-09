import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import MoleculesList, {
  loader as loaderMoleculesList,
} from "./components/pages/molecules/MoleculesList";
import MoleculePage, {
  loader as loaderMolecule,
} from "./components/pages/molecules/MoleculePage";

const router = createBrowserRouter([
  {
    path: "/tekkare",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "molecules",
        element: <MoleculesList />,
        loader: loaderMoleculesList,
      },
      {
        path: "/tekkare/molecules/:index",
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
