import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Header />
      <article>
        <Outlet />
      </article>
    </main>
  );
};
