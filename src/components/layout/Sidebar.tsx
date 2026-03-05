import { NavLink, useLocation } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { logout, profile } from "../../api/auth.api";

const Sidebar = () => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await profile();
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, [location]);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  return (
    <aside className={style.sidebar}>
      <div>
        <div className={style.logo}>Subscription</div>

        <nav className={style.menu}>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? style.active : style.link)}>
            상품
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? style.active : style.link)}>
                내 정보
              </NavLink>
            </>
          )}
        </nav>
      </div>

      <nav className={style.bottomMenu}>
        {isLoggedIn ? (
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? style.active : style.link)}
            onClick={handleLogout}>
            로그아웃
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? style.active : style.link)}>
              로그인
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? style.active : style.link)}>
              회원가입
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
