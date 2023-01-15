import styles from './Layout.module.scss'
import {Header} from "../Header/Header";
import {Outlet} from "react-router";
import {Footer} from "../Footer/Footer";

export function Layout() {
  return <div className={styles.layout}>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
}