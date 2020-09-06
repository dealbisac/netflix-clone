import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    //useEffect to calculate the cursor position to blacout the navbar
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* Netflix Logo */}
            <img
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />

            {/* User Icon */}
            <img
                className="nav__avatar"
                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t31.0-8/p960x960/18671644_1435011846555951_2725551300143052066_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=oNg3_FsGSg0AX_6x_GP&_nc_ht=scontent.fktm8-1.fna&tp=6&oh=75955d5bec9c693d65c4c7d696b2c450&oe=5F78FC26"
                alt="User Avatar"
            />

        </div>
    )
}

export default Nav
