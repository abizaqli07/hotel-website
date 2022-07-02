import React from "react";
import { Link } from "react-router-dom";
import { useWindowScrollPositions } from "./components/GetScrollPosition";
import hotelLogo from "./assets/hotelLogo.png"

function Nav() {
  const [toggle, setToggle] = React.useState(false)
  const {scrollX, scrollY} = useWindowScrollPositions()

  function toggleHandler() {
    setToggle((prev) => {
      return !prev
    })
  }

  return (
    <nav className={`fixed ${scrollY > 0 ? "nav__scroll" : "bg-transparent"} py-4 w-full items-center top-0 z-50`}>
      <div className="layout flex justify-between text-white items-center">
        <div className="font-semibold flex items-baseline gap-2 text__diff"><img className="w-5 h-8" src={hotelLogo}/>The Valhalla</div>
        <ul className="hidden md:flex items-center">
          <li className="nav__link-md">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__link-md">
            <Link to="/book">Book</Link>
          </li>
          <li className="nav__link-md">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-x-4">
          <div className="py-1 px-2 rounded-full glass text-right"><i class="uil uil-search nav__icons"></i></div>
          <div className=""><i class="uil uil-user nav__icons"></i></div>
        </div>
        <div onClick={toggleHandler} className="md:hidden"><i class="uil uil-apps nav__icons"></i></div>
      </div>

      <div className={`toggle__transition layout fixed bg-dark text-white w-full text-center py-4 rounded-b-3xl shadow-lg ${toggle ? "top-0" : "-top-full"} md:hidden`}>
        <div className="layout relative">
          <div className="absolute right-0 top-0" onClick={toggleHandler}><i class="uil uil-times nav__icons"></i></div>
          <ul className="flex w-full justify-between pt-12 px-4 mb-4">
            <li className="nav__link" onClick={toggleHandler}>
              <i class="uil uil-estate nav__icons"></i>
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link" onClick={toggleHandler}>
              <i class="uil uil-book nav__icons"></i>
              <Link to="/book">Book</Link>
            </li>
            <li className="nav__link" onClick={toggleHandler}>
              <i class="uil uil-users-alt nav__icons"></i>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center px-4 gap-4">
            <div className="py-1 px-2 rounded-full glass w-full text-right text-white"><i class="uil uil-search nav__icons"></i></div>
            <div className=""><i class="uil uil-user nav__icons"></i></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;