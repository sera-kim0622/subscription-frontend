import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
