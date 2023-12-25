// import styles from "./Main.module.css";


export default function Header({children}){
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label id="navbar-toggle" className="burger-container">
          <object data="./public/icons/toggle.svg" className="icon-toggle cursor-point"></object>
        </label>
       
    { children }

  </div>
  </header>
}