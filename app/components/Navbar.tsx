import Link from "next/link";
// import SearchBox from "./SearchBox";
import logo from "../../public/logo.png";
import SearchBox from "./SearchBox";
function Navbar() {
  return (
    <>
      {/* logo */}
      <div className="flex items-center">
        <img className="m-3 p-1 mr-1" src={logo.src} alt="logo" />
        <h1 className="text-blue m-6 ml-1 font-mono text-2xl">Game</h1>
        <span className="border-r border-white h-8 sm:-ml-2 -ml-4"></span>
        <Link
          href={"./explore"}
          className="text-white sm:ml-4 ml-1 cursor-pointer hover:text-blue hover:tracking-wider hover:font-bold"
        >
          Explore
        </Link>
        <Link
          href={"./blog"}
          className="text-white sm:ml-4 ml-2 cursor-pointer hover:text-blue hover:tracking-wider hover:font-bold"
        >
          Blog
        </Link>
        <div className="sm:ml-8 ml-2"><SearchBox /></div>
      </div>
      {/* end logo */}
    </>
  );
}

export default Navbar;
