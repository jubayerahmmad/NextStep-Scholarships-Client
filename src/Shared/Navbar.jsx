import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useAuth();

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
      <li>
        <NavLink to="/faq">
          <button>FAQs</button>
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard/allUsers">
              <button>Dashboard</button>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-profile">
              <button>My Profile</button>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure You want to Log Out?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser().then(() => {
          Swal.fire({
            title: "User Logged Out",
            text: "Log Out Successful",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-300 z-50 bg-teal-100 shadow-xl`}
    >
      <div className="navbar lg:max-w-7xl mx-auto px-4 xl:px-0">
        <div className="navbar-start">
          <Link to={"/"} className="text-base hover:bg-none lg:text-2xl">
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src={logo} alt="" />
              <div className="text-left bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-transparent">
                <h1 className="text-sm lg:text-base font-bold">NextStep</h1>
                <h2 className="text-xs lg:text-sm font-bold">Scholarships</h2>
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
              className="btn btn-ghost btn-circle ring-2 ring-teal-600 avatar"
            >
              <div className="w-10 lg:w-12 rounded-full">
                <img
                  alt="user avatar"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co.com/KX2TZyk/man.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-md w-40 z-[1] mt-3 p-2 shadow"
            >
              {user ? (
                <>
                  <div className="avatar flex-col justify-center items-center gap-3 mb-6">
                    <div className="ring-teal-600 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                      <img
                        referrerPolicy="no-referrer"
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://i.ibb.co.com/KX2TZyk/man.png"
                        }
                      />
                    </div>
                    <p className="text-center">{user?.displayName}</p>
                  </div>
                  <li>
                    <button onClick={handleLogout}>Log Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
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
