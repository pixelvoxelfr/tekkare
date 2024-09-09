import { Link, Outlet } from "react-router-dom";
import TekkareLogo from "../../../public/Tekkare_Logo.svg";

export default function RootLayout() {
  return (
    <>
      <header className="flex justify-center pt-4 pb-8">
        <Link to="/tekkare/">
          <img src={TekkareLogo} alt="Tekkare" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className=""></footer>
    </>
  );
}
