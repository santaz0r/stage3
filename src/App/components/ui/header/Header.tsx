import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') || 'Homepage');

  const changeTitle = (currentPage: string) => {
    localStorage.setItem('page', currentPage);
    setCurrentPage(currentPage);
  };
  const setActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navigation_link} ${styles.active_link}` : styles.navigation_link;
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.header__wrapper}>
        <div className={styles.header__page}>{currentPage}</div>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.list_item}>
              <NavLink to="/" className={setActiveLink} onClick={() => changeTitle('Homepage')}>
                Home
              </NavLink>
            </li>
            <li className={styles.list_item}>
              <NavLink to="/about" className={setActiveLink} onClick={() => changeTitle('About')}>
                About
              </NavLink>
            </li>
            <li className={styles.list_item}>
              <NavLink to="/form" className={setActiveLink} onClick={() => changeTitle('Form')}>
                Form
              </NavLink>
            </li>
            <li className={styles.list_item}>
              <NavLink to="/404" className={setActiveLink} onClick={() => changeTitle('404')}>
                404
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
