import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";
import logo from "../components/svg/footerLogo.svg";
import { IoBarChartOutline, IoMenu } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillFileAdd } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import Swal from "sweetalert2";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { GoBell, GoPlusCircle } from "react-icons/go";
import PrimaryButton from "../common/PrimaryButton";
import { FcBusinessman } from "react-icons/fc";

export default function DashboardLayouts() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FEC100",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
      iconColor: "#FEC100",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/auth/log-in");
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out successfully.",
          icon: "success",
          iconColor: "#FEC100",
        });
      }
    });
  };

  const getPageTitle = () => {
    if (location.pathname === "/dashboard") return "Overview";
    if (location.pathname.includes("add-new-product")) return "Add New Listing";
    if (location.pathname.includes("manage-listings")) return "Manage Listings";
    if (location.pathname.includes("order")) return "Order List";
    if (location.pathname.includes("accounts")) return "Account Settings";
    return "Dashboard";
  };

  // Sidebar links
  const SidebarContent = () => (
    <div className="flex flex-col justify-between h-full py-5">
      <ul className="space-y-2 font-medium">
        <Link to="/" className="flex items-center mb-6 px-6 gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-2xl text-white font-semibold">Resolaring</span>
        </Link>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 text-white ms-3  ${isActive ? "bg-accent" : "hover:bg-accent duration-300"
              }`
            }
            end
          >
            <IoBarChartOutline className="text-xl" /> Overview
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/add-new-product"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 text-white ms-3  ${isActive ? "bg-accent" : "hover:bg-accent duration-300"
              }`
            }
            end
          >
            <AiFillFileAdd className="text-xl" /> Add New Listing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/manage-listings"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 text-white ms-3  ${isActive ? "bg-accent" : "hover:bg-accent duration-300"
              }`
            }
            end
          >
            <FaListAlt className="text-xl" /> Manage Listings
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/order"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 text-white ms-3  ${isActive ? "bg-accent" : "hover:bg-accent duration-300"
              }`
            }
            end
          >
            <GrDocumentTime className="text-xl" /> Order List
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/accounts"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 text-white ms-3  ${isActive ? "bg-accent" : "hover:bg-accent duration-300"
              }`
            }
            end
          >
            <MdManageAccounts className="text-xl" /> Account Settings
          </NavLink>
        </li>
      </ul>

      <div
        onClick={handleLogout}
        className=" mb-6 cursor-pointer hover:bg-accent duration-300 ease-in-out py-3 px-4 text-white  flex gap-2 items-center"
      >
        <RiLogoutBoxRLine size={22} />
        Log out
      </div>
    </div>
  );

  return (

    <div className="w-[100%] flex h-screen" >
      {/* Sidebar */}
      <div className="bg-primary w-[300px] hidden xl:block h-screen ">
        <SidebarContent />
      </div>

      <main className="flex-1 lg:w-[calc(100%-300px)]  flex flex-col overflow-y-hidden">
        {/* top bar */}
        <header className="sticky top-0 z-30  bg-white border-b shadow-sm flex justify-between items-center px-6 py-4 md:py-5">
          <h2 className="text-[16px] md:text-xl lg:text-2xl font-semibold text-gray-800">
            {getPageTitle()}
          </h2>
          <div className="flex items-center gap-2">
            <div className='flex   items-center lg:items-center gap-3 ' >
                                  <input placeholder='Search for product' className=' px-4 py-2 hidden xl:block lg:w-96 rounded-full border bg-gray-100 border-gray-200' type="text" name="" id="" />
                                  <PrimaryButton className=' hidden md:flex w-fit' icon={GoPlusCircle} >
                                      Add Product
                                  </PrimaryButton>
                                  <GoBell   className="size-5 md:size-6"  />
                  
                                  <div className='flex items-center gap-2' >
                                      <div className='p-2 rounded-full w-fit  bg-gray-200' ><span className="size-4 md:size-8"><FcBusinessman  /></span></div>
                                      <div className="hidden md:block">
                                          <h6 className='font-bold text-sm md:text-xl' >John kal</h6>
                                          <p className='text-gray-400 text-[12px] md:text-sm ' >Seller</p>
                                      </div>
                                  </div>
                              </div>


          <Sheet>
          
             <SheetTrigger className='p-0 md:ml-5 !px-0' asChild>
              <Button
                    
                className="xl:hidden hover:bg-secondary p-0 cursor-pointer  bg-white rounded-none "
              >
                <IoMenu className="!size-7" color="black" size={24} />
              </Button>
            </SheetTrigger>

         
         

            <SheetContent
              side="left"
              className="p-0 w-[280px] bg-primary border-none text-white"
            >
              <SidebarContent />
             
            </SheetContent>
          </Sheet>
          </div>         

        </header>
        {/*  content */}
        <section className="flex-1 h- overflow-y-auto p-6">
          <Outlet />
        </section>
      </main>

    </div>

  );
}

