import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-10">
      <Link to={"/"}>
        {" "}
        <div className="flex items-center gap-1">
          <img
            className="w-8"
            src="./video-player-logo.png"
            alt="video player logo"
          />
          <span className="text-2xl text-white font-bold">Video Player</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
