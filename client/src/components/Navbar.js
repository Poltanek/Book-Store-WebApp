import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleNavbar = () => setOpen(!isOpen);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <a href="/" className={styles.logo}>Midnight Manuscripts</a>

                {/* Hamburger Menu (Only visible on mobile) */}
                <div className={styles.hamburger}>
                    <Hamburger
                        color="rgb(255, 255, 255)" 
                        toggled={isOpen}               
                        toggle={toggleNavbar}          
                    />
                </div>

                {/* Navbar Links */}
                <nav className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.link}>HOME</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/blogpage" className={styles.link}>RELEASES</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/aboutpage" className={styles.link}>ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
