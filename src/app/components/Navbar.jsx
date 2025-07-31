"use client";

import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <nav className="flex justify-between items-center mt-6">
      <section className="flex items-center gap-3">
        <Image src={logo} alt="logo"  className="w-8 h-8 md:w-12 md:h-12"></Image>
        <Link href={"/"}>
          <h1 className="text-xl md:text-3xl font-semibold">
            WorK <span className="font-light -ml-1">Room</span>
          </h1>
        </Link>
      </section>

      <div>
        {status === "authenticated" ? (
          <>
          
          <div className="flex items-center gap-3">

            <h1 className="text-xl hidden md:inline font-semibold text-blue-700 px-2 ">Hi, {session.user?.name}</h1>
            <Link href={"/dashboard"}>
                <button className="btn btn-warning rounded-full ">
                  Dashboard
                </button>
              </Link>
            <button onClick={()=> signOut()} className="btn mr-3 rounded-full btn-outline btn-error px-6">
                  Logout
              </button>
          </div>
          
          </>
        ) : (
          <>
            <div>
              <Link href={"/login"}>
                <button className="btn mr-3 rounded-full btn-info px-6">
                  Login
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="btn btn-outline btn-success rounded-full hidden md:inline">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
