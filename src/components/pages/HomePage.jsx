import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-serif text-teal-800 text-center pb-8">
        Front-end Technical Test
      </h1>
      <p className="max-w-[600px] justify-normal">
        Here is my proposition for the technical-test. You will find below the
        relevant links for this project.
      </p>
      <ul className="max-w-[600px] pb-4">
        <li className="underline">
          <Link to="https://github.com/pixelvoxelfr/tekkare">
            Github Repository
          </Link>
        </li>
        <li className="underline">
          <Link to="https://pixelvoxelfr.github.io/tekkare/">
            Link to the app on Github Pages
          </Link>
        </li>
        <li className="underline">
          <Link to="https://www.linkedin.com/in/nathanaelghisalberti/">
            My LinkedIn profile
          </Link>
        </li>
      </ul>
      <p className="max-w-[600px] justify-normal">
        I decided to work on the molecules data and implemented different
        features accordingly.
      </p>
      <Link to="/tekkare/molecules">
        <button className="font-semibold bg-teal-900 hover:bg-teal-700 transition:bg duration-300 text-white p-4 rounded-md">
          {" "}
          Check it out ! <i className="fas fa-hand-point-right" />
        </button>
      </Link>
    </div>
  );
}
