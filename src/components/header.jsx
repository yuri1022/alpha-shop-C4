import { useState } from 'react';
import Toggle from '../assets/icon/toggle.svg';
import SearchIcon from '../assets/icon/search.svg';
import CartIcon from '../assets/icon/cart.svg';
import MoonIcon from '../assets/icon/moon.svg';
import SunIcon from '../assets/icon/sun.svg';
import LogoIcon from '../assets/icon/logo.svg';


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu)
  return (
  <>
      <header className="site-header">
        <div className="header-container mx-auto">
          <label htmlFor="navbar-toggle" className="burger-container" onClick={toggleMenu}>
            <img className="icon-toggle cursor-point" src={Toggle} alt="Toggle Menu" />
          </label>
          <nav className="navbar-menu pc">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">男款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">女款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">最新消息</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">客製商品</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">

              <li className="nav-item">
                <img className="nav-icon cursor-point" src={SearchIcon} alt="Search" />
              </li>

              <li className="nav-item">
                <img className="nav-icon cursor-point" src={CartIcon} alt="Cart" />
              </li>
              <li id="theme-toggle" className="nav-item">

                <img className="nav-icon cursor-point" src={MoonIcon} alt="Moon" />

                <img className="nav-icon cursor-point" src={SunIcon} alt="Sun" />

              </li>
            </ul>
          </nav>   

{showMenu&&
(<nav className={`navbar-menu ${showMenu ? 'active' : ''}`}>
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">男款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">女款</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">最新消息</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">客製商品</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">

              <li className="nav-item">
                <img className="nav-icon cursor-point" src={SearchIcon} alt="Search" />
              </li>

              <li className="nav-item">
                <img className="nav-icon cursor-point" src={CartIcon} alt="Cart" />
              </li>
              <li id="theme-toggle" className="nav-item">

                <img className="nav-icon cursor-point" src={MoonIcon} alt="Moon" />

                <img className="nav-icon cursor-point" src={SunIcon} alt="Sun" />

              </li>
            </ul>
          </nav>)      

          }


          <a className="header-logo-container" href="#">
            <img className="cursor-point" src={LogoIcon} alt="Logo" />
          </a>
        </div>
      </header>
    </>
  );
}