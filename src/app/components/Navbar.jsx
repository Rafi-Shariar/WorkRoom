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
        <Image src={logo} alt="logo" width={52} height={52}></Image>
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            WorK <span className="font-light -ml-1">Room</span>
          </h1>
        </Link>
      </section>

      <div>
        {status === "authenticated" ? (
          <>
          
          <div className="flex items-center gap-3">

            <h1 className="text-xl font-semibold text-blue-700 border-b border-r p-2 border-slate-300 rounded-lg">Hi, {session.user?.name}</h1>
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
