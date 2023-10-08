import { useState } from "react";
import "./Header.css";
import { Outlet } from "react-router";

export function Header() {
  return (
    <>
      <div id="Header">
        <p id="left">left</p>
        <p id="right">right</p>
      </div>
      <Outlet />
    </>
  );
}
