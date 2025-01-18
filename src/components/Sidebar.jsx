import { BiLogOut, BiMenu } from "react-icons/bi";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { FaUserGraduate, FaUserShield } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";
import { MdRateReview, MdReviews } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { VscGitStashApply } from "react-icons/vsc";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  const { role } = useRole();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure You want to Log Out?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser().then(() => {
          navigate("/");
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
    <div>
      {/* top nav */}
      <nav className="fixed top-0 z-50 w-full bg-teal-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => setOpenSidebar(!openSidebar)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-cyan-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {openSidebar ? <CgClose size={28} /> : <BiMenu size={28} />}
              </button>
              {/* logo */}
              <Link to="/">
                <div className="flex justify-center items-center gap-2">
                  <img className="w-10 h-10" src={logo} alt="" />
                  <div className="text-left bg-gradient-to-br from-teal-500 via-teal-700 to-teal-950 bg-clip-text text-transparent">
                    <h1 className="text-sm lg:text-base font-bold">NextStep</h1>
                    <p className="text-xs lg:text-sm font-bold">Scholarships</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* user profile */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 lg:w-12 rounded-full ring-2 ring-teal-700">
                  <img
                    alt="user profile"
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
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-md z-[1] mt-3 p-2 shadow"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
              </ul>
            </div>
            {/*  */}
          </div>
        </div>
      </nav>

      {/* ----------SIDEBAR--------- */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }  lg:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* only admin */}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink
                    to="admin-profile"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <FcStatistics size={20} />
                    <span className="ms-3">Admin Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="allUsers"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <FaUserShield size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Manage Users
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {/* admin/moderator */}
            {role === "Admin" || role === "Moderator" ? (
              <>
                <li>
                  <NavLink
                    to="appliedScholarships"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <FaUserGraduate size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Applied Scholarships
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="allReviews"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <MdReviews size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Reviews
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="addScholarships"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <GiGraduateCap size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Scholarship
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageScholarships"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <LiaGraduationCapSolid size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Manage Scholarships
                    </span>
                  </NavLink>
                </li>
              </>
            ) : null}
            {/* user/student navs */}

            {role === "User" && (
              <>
                <li>
                  <NavLink
                    to="myApplications"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <VscGitStashApply size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      My Applications
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myReviews"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <MdRateReview size={20} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      My Reviews
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            {/* logout and profile(moderator,user profile) */}
            <li>
              <NavLink
                to="my-profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CgProfile size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BiLogOut size={20} />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
