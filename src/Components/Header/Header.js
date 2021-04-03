import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="main_nav">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/features">Features</a>
                <a href="/players">Players</a>
                <a href="/gallery">Gallery</a>
            </nav>
            <h1>Universal Football Club</h1>
        </div>
    );
};

export default Header;