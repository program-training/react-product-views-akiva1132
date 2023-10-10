import { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { LuFileStack } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";

export function Header() {
  return <div>
  <div id="Header">
    <p id="left">
    <Link id="iconAllProduct" to={"/"}><LuFileStack/></Link>
      </p>
    <div>
    <Link id="iconUserAdd" to={"/"}><AiOutlineUserAdd/></Link>
    <Link id="iconLogIn" to={"/"}><IoMdLogIn/></Link>
    </div>
  </div>
<Outlet/>
  </div>
    
}
