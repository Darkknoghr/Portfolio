"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <span className={styles.navName}>
          Cyril Nutsugah
        </span>
        
        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><a href="#about" onClick={closeMenu} className={styles.navLink}>About</a></li>
          <li><a href="#experience" onClick={closeMenu} className={styles.navLink}>Experience</a></li>
          <li><a href="#education" onClick={closeMenu} className={styles.navLink}>Education</a></li>
          <li><a href="#skills" onClick={closeMenu} className={styles.navLink}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu} className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className={styles.navLink}>Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li><a href="#about" onClick={closeMenu} className={styles.mobileNavLink}>About</a></li>
            <li><a href="#experience" onClick={closeMenu} className={styles.mobileNavLink}>Experience</a></li>
            <li><a href="#education" onClick={closeMenu} className={styles.mobileNavLink}>Education</a></li>
            <li><a href="#skills" onClick={closeMenu} className={styles.mobileNavLink}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className={styles.mobileNavLink}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu} className={styles.mobileNavLink}>Contact</a></li>
            <li className={styles.mobileThemeToggleWrapper}>
              <span className={styles.mobileThemeToggleLabel}>Theme</span>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
