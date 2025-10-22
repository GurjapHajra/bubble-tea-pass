import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="site-header">
            <div className="brand">🥤 Campus Tea</div>
            <nav className="nav">
                <a href="#how-it-works">How it Works</a>
                <a href="#included">What’s Included</a>
                <a href="#subscribe">Subscribe</a>
                <a href="#pass">Digital Pass</a>
                <a href="#feedback">Contact</a>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '🌙' : '☀️'}
            </button>
        </header>
    );
};

export default Header;