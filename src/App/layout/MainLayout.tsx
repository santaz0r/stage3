import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';
import Header from '../components/ui/header/Header';
import Footer from '../components/ui/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.main} data-testid="layout">
        <div className={styles.container}>
          <Outlet />
          <ToastContainer position="top-left" autoClose={2000} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
