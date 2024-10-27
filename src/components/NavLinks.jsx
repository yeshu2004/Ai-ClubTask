import { FaGooglePlay } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import club_logo from "../assets/club_logo-icon.png"
import { Link, NavLink } from 'react-router-dom'
import vitlogo from '../assets/bhopal.png'

const NavLinks = () => {
  return (
    <div className='px-10 pt-5 fixed top-0 w-full'>
      <div className='uppercase flex items-center justify-between'>
        <div className="h-20">
          <img src="https://vitbhopal.ac.in/wp-content/uploads/2020/01/logochhota.png" className="h-full w-full" alt="" />
        </div>
        <div className="items-center text-white gap-5 font-[Neue] text-sm lg:flex hidden">
          <a href="">About Us</a>
          <a href="">Events</a>
          <a href="">Contact</a>
        </div>
        <div className="h-28">
          <img src={club_logo} className="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavLinks