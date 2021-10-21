import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
    return (
        <div className="text-center my-5">
            <img src={logo} alt="HDE Logo" />
            <h1>High Defention Events</h1>
            <h2>The HDE App</h2>
        </div>
    )
}
