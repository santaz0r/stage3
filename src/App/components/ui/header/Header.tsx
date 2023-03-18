import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navigation_link} ${styles.active_link}` : styles.navigation_link;

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className={styles.header} data-testid="header">
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.list_item}>
              <NavLink to="/" className={setActiveLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.list_item}>
              <NavLink to="/about" className={setActiveLink}>
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
