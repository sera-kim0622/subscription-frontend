import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.logo}>Subscription</div>

      <nav className={style.menu}>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? style.active : style.link)}>
          상품
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => (isActive ? style.active : style.link)}>
          내 정보
        </NavLink>

        <NavLink to="/order" className={({ isActive }) => (isActive ? style.active : style.link)}>
          주문 내역
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
