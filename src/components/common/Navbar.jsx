import { useEffect,  } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink,  } from "react-router-dom";
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import { navLinks } from "../../navLinks.js";
import SingleLink from "./SingleLink";

const Navbar = () => {
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // ✅ Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    localStorage.setItem("Martvilla-theme-mode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    const rootDoc = document.documentElement;
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");

    return () => {
      rootDoc.classList.remove("dark");
    };
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

  return (
    <div
      className="navbar h-[60px] fixed w-full px-[2%] flex-center-between py-[0.35rem] bg-white border-b backdrop-blur-sm  z-50"
      onMouseOver={handleClose}
    >
      {/* ✅ Logo */}
      <Link to="/Home" className="flex-shrink-0 flex-align-center gap-x-1">
        <img src="/images/geal1.png" alt="Logo" className="w-[55px] h-[55px]" />
        <div className="leading-tight uppercase" style={{ fontFamily: 'Cinzel Decorative' }}>
          <h1 className="text-xl text-indigo-900 font-black tracking-wide">Garudavega Earth & </h1>
          <p className="text-l text-indigo-800 text-center tracking-wide font-black">
            Artha Lysies Pvt Ltd
          </p>
        </div>
      </Link>

      <div className="flex-align-center gap-x-4">
        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex-align-center">
          {navLinks.map((link) => (
            <SingleLink {...link} key={link.id} />
          ))}
        </ul>

        {/* ✅ Mobile Menu */}
        <div
          className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 transition-opacity ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleCloseSidebar}
        >
          <ul
            className={`mobile-dialog absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-[500px]"
            }`}
          >
            <div className="border-b flex-center-between dark:border-slate-800">
              <p className="uppercase">menu</p>
              <div className="icon-box md:hidden" onClick={() => dispatch(closeSidebar())}>
                <FiDelete />
              </div>
            </div>
            {navLinks?.map(({ id, linkText, url, subLinks }) => (
              <ul key={id}>
                <NavLink
                  to={url}
                  className="w-fit before:!hidden"
                  onClick={() => dispatch(closeSidebar())}
                >
                  {linkText}
                </NavLink>
                {subLinks?.map(({ id, linkText, url }) => (
                  <ul key={id} className="mt-2">
                    <NavLink
                      to={url}
                      className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                      onClick={() => dispatch(closeSidebar())}
                    >
                      {linkText}
                    </NavLink>
                  </ul>
                ))}
              </ul>
            ))}
          </ul>
        </div>

        {/* ✅ Right Section */}
        <div className="space-x-2 flex-align-center">
          {/* ✅ Dark Mode Toggle */}
          <div
            className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
            onClick={handleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <div className="icon-box md:hidden" onClick={() => dispatch(openSidebar())}>
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
