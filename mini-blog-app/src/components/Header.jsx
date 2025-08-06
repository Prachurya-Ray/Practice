import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex justify-between  py-4 px-8 bg-blue-500 text-white">
      <h1 className="font-bold text-xl">Mini Blog</h1>
      <ul className="menus flex gap-10 font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogCreation">Create Blog</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Header