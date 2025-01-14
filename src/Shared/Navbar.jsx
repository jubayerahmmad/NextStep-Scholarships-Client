import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/allScholarships">
          <button>Scholarships</button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 w-full z-50 bg-teal-100 animate__animated animate__fadeInDown">
      <div className="navbar lg:w-10/12 mx-auto px-6">
        <div className="navbar-start">
          <Link to={"/"} className="text-base hover:bg-none lg:text-2xl">
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src={logo} alt="" />
              <div className="text-left bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-transparent">
                <h1 className="text-sm lg:text-base font-bold">NextStep</h1>
                <p className="text-xs lg:text-sm font-bold">Scholarships</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end items-center">
          {/* big screen nav */}
          <ul className="text-xl gap-4 px-2 py-1 rounded-md hidden font-bold lg:flex mx-4">
            {navOptions}
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 lg:w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/KVqSkwf/silver-gradient-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standin.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-md w-40 z-[1] mt-3 p-2 shadow"
            >
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          {/* small screen nav */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent border-none shadow-none lg:hidden"
            >
              <BiMenu size={28}></BiMenu>
            </div>
            <ul
              tabIndex={0}
              className="px-5 py-2 space-y-2 right-3 text-black flex flex-col font-semibold dropdown-content bg-base-100 rounded-md z-[1] mt-3 shadow"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
