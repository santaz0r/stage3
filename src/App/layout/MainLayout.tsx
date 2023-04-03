import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';
import Header from '../components/ui/header/Header';
import Footer from '../components/ui/footer/Footer';

function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.main} data-testid="layout">
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
