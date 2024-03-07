import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <span className="text-2xl">Video Player</span>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </div>
          <div className="mr-4">
            <Link to="#" className="text-white hover:text-gray-200">
              Details
            </Link>
          </div>
          <div className="mr-4">
            <Link to="#" className="text-white hover:text-gray-200">
              About
            </Link>
          </div>
          <div>
            <Link to="#" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
