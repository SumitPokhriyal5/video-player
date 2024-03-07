import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-10">
          <Link to={'/'} className="text-2xl text-white font-bold">Video Player</Link>
    </nav>
  );
};

export default Navbar;
