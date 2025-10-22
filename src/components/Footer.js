import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} Campus Tea</p>
            <nav>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
            </nav>
        </footer>
    );
};

export default Footer;