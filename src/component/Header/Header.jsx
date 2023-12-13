import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const HandleLogOut = () => {
    logout()
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error)
    }) 
  }


  const navbar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : " "
          }
        >
          <h1 className="text-lg font-medium">Home</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : " "
          }
        >
          <h1 className="text-lg font-medium">Add Product</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/MyCard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : " "
          }
        >
          <h1 className="text-lg font-medium">My cart</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : " "
          }
        >
          <h1 className="text-lg font-medium">Help</h1>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white rounded-lg">
      <div className="navbar-start hidden lg:flex">
        <ul className="flex gap-8 px-1">{navbar}</ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <a className="flex items-center">
          <img
            className="w-16"
            src="https://i.ibb.co/kq83SnF/Opel-symbol-9-500x333-removebg-preview.png"
            alt=""
          />
          <h1 className="text-xl font-bold">
            carbazar<span className="text-red-400">.com</span>
          </h1>
        </a>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/r5YjVQq/nerd-blogger-thumbs-up-cartoon-writer-author-vector-41615057-removebg-preview.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={HandleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              {" "}
              <button className="btn btn-accent">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn ml-4">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
