import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import logo from "../components/svg/footerLogo.svg";
import { IoBarChartOutline } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillFileAdd } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import Swal from "sweetalert2";



export default function DashboardLayouts() {

  const navigate = useNavigate()


  const handleLogout = () =>{

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#FEC100",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Log Out!",
  iconColor: '#FEC100'
}).then((result) => {
  if (result.isConfirmed) {

    navigate('/auth/log-in')

    Swal.fire({
      title: "Log out!",
      text: "Log out successfully",
      icon: "success",
      iconColor: '#FEC100',
    });
  }
})



  }







  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className=" min-h-screen h-full">
      {/* ---   nav ber   --- */}

      <nav className="sticky top-0 z-50 w-fit bg-minor">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start rtl:justify-end">
              {/* ✅ Drawer Toggle Button with animation */}
              <button
                onClick={toggleDrawer}
                type="button"
                className="inline-flex  p-2 text-sm  rounded-lg lg:hidden bg-accent cursor-pointer focus:outline-none focus:ring-2 relative w-10 h-10 justify-center items-center"
              >
                {/* Hamburger Icon */}
                <svg
                  className={`absolute w-6 h-6 transition-all duration-300 ${isDrawerOpen
                      ? "opacity-0 scale-75 rotate-45"
                      : "opacity-100 scale-100 rotate-0"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className={`absolute w-6 h-6 transition-all duration-300 ${isDrawerOpen
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-45"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Link
                to="/"
              >
                <div
                  className={`lg:flex items-center w-fit hidden   p-2 gap-2 
                ${isDrawerOpen ? 'block' : 'hidden'}
                     `}>
                  <img src={logo} alt="Resolaring Logo" className="h-8 w-auto" />
                  <span className="text-2xl text-white font-semibold">Resolaring</span>
                </div>
              </Link>

            </div>
            
          </div>
        </div>
      </nav>

      {/* ---   drawer   --- */}

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20  transition-transform duration-300 bg-primary border-r border-primary 
        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        <div className="h-full pb-4 overflow-y-auto bg-primary flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            {/* user dash link */}

            <li>
              <NavLink
                to="/dashboard/overview"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 text-white ms-3 group ${isActive ? "bg-accent" : "hover:bg-accent duration-300 ease-in-out"}`
                }
              >
                <IoBarChartOutline className="text-xl" /> Overview
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/add-new-product"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 text-white ms-3 group ${isActive ? "bg-accent" : "hover:bg-accent duration-300 ease-in-out"}`
                }
              >
                <AiFillFileAdd className="text-xl" /> Add New Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-listings"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 text-white ms-3 group ${isActive ? "bg-accent" : "hover:bg-accent duration-300 ease-in-out"}`
                }
              >
                <FaListAlt className="text-xl" /> Manage Listings
              </NavLink>
            </li>





            <li>
              <NavLink
                to="/dashboard/order"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 text-white ms-3 group ${isActive ? "bg-accent" : "hover:bg-accent duration-300 ease-in-out"}`
                }
              >
                <GrDocumentTime className="text-xl" /> Order List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/accounts"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 text-white ms-3 group ${isActive ? "bg-accent" : "hover:bg-accent duration-300 ease-in-out"}`
                }
              >
                <MdManageAccounts size={25} className="text-xl" /> Account Settings
              </NavLink>
            </li>

          </ul>

          {/* ✅ Bottom Back Button */}
          <div onClick={handleLogout}  className="mb-6 mx-auto cursor-pointer w-full px-6 hover:bg-accent duration-300 ease-in-out py-3  text-white">
            {/* <Link onClick={closeDrawer} to="/auth/log-in"> */}
              <button  className="flex gap-2 cursor-pointer items-center">
                <RiLogoutBoxRLine size={25} />
                Log out
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="p-4 z-60 lg:-mt-15 lg:ml-54">
        <Outlet />
      </div>
    </div>
  );
}
