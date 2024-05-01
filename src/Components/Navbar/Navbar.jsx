import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
// Se eliminó la importación de underline
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <div className="nav-content">
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' href='#home' offset={100} onClick={() => setMenu("home")}>Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#about' offset={50} onClick={() => setMenu("about")}>About Me</AnchorLink></li>
          <li><AnchorLink className='anchor-link' href='#services' offset={50} onClick={() => setMenu("services")}>Services</AnchorLink></li>
          {/* <li><AnchorLink className='anchor-link' href='#work' offset={50} onClick={() => setMenu("work")}>Works</AnchorLink></li> */}
          <li><AnchorLink className='anchor-link' href='#contact' offset={50} onClick={() => setMenu("contact")}>Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect">
          <a href='https://www.linkedin.com/in/pablo-duarte097/' target="_blank" rel="noopener noreferrer" className='anchor-link'>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

