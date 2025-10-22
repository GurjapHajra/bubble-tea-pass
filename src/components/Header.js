import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="brand">🥤 Campus Tea</div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
                <a href="#how-it-works" onClick={closeMenu}>How it Works</a>
                <a href="#included" onClick={closeMenu}>What’s Included</a>
                <a href="#subscribe" onClick={closeMenu}>Subscribe</a>
                <a href="#pass" onClick={closeMenu}>Digital Pass</a>
                <a href="#feedback" onClick={closeMenu}>Contact</a>
            </nav>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? '🌙' : '☀️'}
                </button>
                <button
                    className="menu-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="primary-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;