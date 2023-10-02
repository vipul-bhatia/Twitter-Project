import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

const { logout } = useLogout();
const { user } = useAuthContext();

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const [color, setColor] = useState(false);
const changeColor = ()=>{
  if(window.scrollY >= 100){
    setColor(true);
  }else{
    setColor(false);
  }
}


window.addEventListener('scroll', changeColor)

  return (
  <div className={color ? 'header header-bg':"header"}>
    <Link to='/'>
    <h1 style={{color:'rgb(29,161,242)'}}>DisasterOnTwitter</h1>
    </Link>
    <ul className={click ? 'nav-menu active':'nav-menu'}>
    {!user && (
					<>
						<li>
            <Link to="/login" onClick={() => setClick(false)}>Login</Link>
						</li>
						<li>
            <Link to="/signup" onClick={() => setClick(false)}>Signup</Link>
						</li>
					</>
				)}
        {user && (
					<>
            <li>
            <Link to='/' onClick={() => setClick(false)}>Home</Link>
      </li>
      <li>
      <Link to='/project' onClick={() => setClick(false)}>Project</Link>
      </li>
      <li>
      <Link to='/about' onClick={() => setClick(false)}>About</Link>
      </li>
      <li>
      <Link to='/contact' onClick={() => setClick(false)}>Contact</Link>

      </li>
						<li>
							<button className="btn-logout" onClick={logout}>
                Logout
              </button>
						</li>
					</>
				)}

     
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color: '#fff'}}/>): (<FaBars size={20} style={{color: '#fff'}}/>)}
    </div>
  </div>
  )
};

export default Navbar;
