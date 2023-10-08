import { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { LuFileStack } from "react-icons/lu";

export function Header() {
  return <div>
  <div id="Header">
    <p id="left">
    <Link id="iconAllProduct" to={"/"}><LuFileStack/></Link>
      </p>
    <p id="right">right</p>
  </div>
<Outlet/>
  </div>
    
}
