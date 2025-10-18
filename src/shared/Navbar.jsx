import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, LogIn } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import PrimaryButton from "../common/PrimaryButton";
import logo from "../../public/logo.png";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/why-resolaring", label: "Why Resolaring?" },
    { to: "/recycling-process", label: "The Recycling Process" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/gallery", label: "Shared Gallery" },
  ];

  return (
    <header className="w-full bg-white">
      <div className="2xl:max-w-9/12 max-w-11/12 mx-auto py-6 flex justify-between items-center">

        {/* logo */}
        <Link to="/" className="flex flex-col items-start space-y-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Resolaring Logo" className="2xl:h-10 h-8 w-auto" />
            <span className="2xl:text-4xl text-3xl font-semibold text-gray-900">
              Resolaring
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-none">
            Recycling and installing panels for a better future
          </p>
        </Link>

        {/* desktop nav */}
        <nav className="hidden xl:flex justify-between items-center space-x-3 2xl:space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-black font-medium" : "text-gray-600 hover:text-black"}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <PrimaryButton to="/account-settings" icon={FaArrowRightLong}>
            Become a Seller
          </PrimaryButton>

          <Link
            to="/auth/log-in"
            className="flex items-center border border-gray-300 px-3 gap-2 py-3 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Login
            <CgProfile size={20} />
          </Link>

          <NavLink
            key={"/book"}
            to={"/book"}
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-black font-medium" : "text-gray-600 hover:text-black"}`
            }
          >
            Book Online
          </NavLink>
        </nav>

        {/* mb drawer btn */}
        <Drawer open={open} onOpenChange={setOpen} direction="left">
          <DrawerTrigger asChild>
            <button className="xl:hidden cursor-pointer text-gray-800">
              <Menu className="h-6 w-6" />
            </button>
          </DrawerTrigger>

          <DrawerContent className="h-full w-3/4 sm:w-1/2 bg-white fixed left-0 top-0 shadow-lg rounded-none">
            <DrawerHeader className="flex items-center justify-between border-b">
              <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
              <DrawerClose asChild>
                <button className="text-gray-700 p-2">
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>

            <nav className="flex flex-col p-5 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-700 hover:text-black"
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/account-settings"
                onClick={() => setOpen(false)}
                className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition text-center"
              >
                Become a Seller →
              </Link>

              <Link
                to="/auth/log-in"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center border border-gray-300 px-3 py-2 rounded-full text-sm hover:bg-gray-100 transition"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
