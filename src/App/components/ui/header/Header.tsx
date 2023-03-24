import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navigation_link} ${styles.active_link}` : styles.navigation_link;

class Header extends React.Component {
  state = { currentPage: 'homepage' };

  changeTitle = (currentPage: string) => {
    this.setState({ currentPage });
  };
  render(): React.ReactNode {
    return (
      <header className={styles.header} data-testid="header">
        <div className={styles.header__wrapper}>
          <div className={styles.header__page}>{this.state.currentPage}</div>
          <nav>
            <ul className={styles.navigation}>
              <li className={styles.list_item}>
                <NavLink to="/" className={setActiveLink} onClick={() => this.changeTitle('homepage')}>
                  Home
                </NavLink>
              </li>
              <li className={styles.list_item}>
                <NavLink to="/about" className={setActiveLink} onClick={() => this.changeTitle('About us')}>
                  About us
                </NavLink>
              </li>
              <li className={styles.list_item}>
                <NavLink to="/form" className={setActiveLink} onClick={() => this.changeTitle('Form')}>
                  Form
                </NavLink>
              </li>
              <li className={styles.list_item}>
                <NavLink to="/404" className={setActiveLink} onClick={() => this.changeTitle('404')}>
                  404
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
