import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  return <div>
    <header>
      <ul>
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/about'}>
            About
          </Link>
        </li>
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
}

export default DefaultLayout;