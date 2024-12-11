import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="text-slate-950 bg-stone-200 text-pretty p-4">
      <div className="flex justify-around">
        <Link to="/" className="hover:text-blue-600">Home🏠</Link>
        <Link to="/campaign" className="hover:text-blue-600">Campaign</Link>
        <Link to="/lineitem" className="hover:text-blue-600">Line Item</Link>
        <Link to="/creatives" className="hover:text-blue-600">Creatives</Link>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
