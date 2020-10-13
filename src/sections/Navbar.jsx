import React, {useState, useEffect} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import SidebarButton from '../components/SidebarButton'
import Sidebar from '../components/Sidebar'

const Navbar = () => {
  const [showsidenav, setShowSideNav] = useState('hidden')
  useEffect(()=> {
    setShowSideNav('hidden')
  },[] )
  const toggleSideNav = () => {
    showsidenav === 'hidden' ? setShowSideNav('show') : setShowSideNav('hidden')
   };
 const closeSidebar = () => {
    setShowSideNav('hidden');
  };
  return (
    <div className="navbar-container">
       <Sidebar closeSidebar={closeSidebar} showSideNav={showsidenav}/>
       <div className="banner-wrapper">
        <header className="header-container">
          <h1 className="logo-hugo">H</h1>
          <div className="nav-links">
            <Link
              activeClass="active"
              className="navbar-link"
              to="personal-bio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {' '}
              Acerca
            </Link>
            <Link
              activeClass="active"
              className="navbar-link"
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {' '}
              Work
            </Link>
            <Link
              activeClass="active"
              className="navbar-link"
              to="tech-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              {' '}
              Tech
            </Link>
            <Link
              activeClass="active"
              className="navbar-link"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
            >
              {' '}
              Contactos
            </Link>
          </div>
          <SidebarButton toggleSideNav={toggleSideNav} />
        </header>
        </div>
    </div>
  )
}

export default Navbar
