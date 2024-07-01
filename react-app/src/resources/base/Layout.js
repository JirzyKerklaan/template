import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  )
};

export default Layout;
