export default function Nav(){
      
<nav className="navbar-menu">
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
              <object data="./public/icons/search.svg" className="nav-icon cursor-point" type="image/svg+xml">
              </object>                             
            </li>
          
            <li className="nav-item">
              <object data="./public/icons/cart.svg" className="nav-icon cursor-point" type="image/svg+xml">
              </object>   
            </li>
            <li id="theme-toggle" className="nav-item">
      
              <object data="./public/icons/moon.svg" className="nav-icon cursor-point" ></object>

            <object data="./public/icons/sun.svg" className="nav-icon cursor-point">
              </object>    
            </li>
          </ul>
        </nav>
}