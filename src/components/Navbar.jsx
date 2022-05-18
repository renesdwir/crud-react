import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-blue-200 flex flex-row justify-center gap-10 py-5">
        <Link
          to="/"
          className="text-xl font-semibold text-blue-700 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="text-xl font-semibold text-blue-700 cursor-pointer"
        >
          Add
        </Link>
      </div>
    </>
  );
}
