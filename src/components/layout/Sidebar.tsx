import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
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

          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? style.active : style.link)}>
            내 정보
          </NavLink>

          <NavLink to="/order" className={({ isActive }) => (isActive ? style.active : style.link)}>
            주문 내역
          </NavLink>
        </nav>
      </div>

      <nav className={style.bottomMenu}>
        <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : style.link)}>
          로그인
        </NavLink>

        <NavLink to="/signup" className={({ isActive }) => (isActive ? style.active : style.link)}>
          회원가입
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
