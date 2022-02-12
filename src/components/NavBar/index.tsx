import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-laft">
                    <Link to={'/'} className="uk-navbar-item uk-logo">My Todos</Link>

                </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to={'/create'}>
                            <span style={{fontSize: 40, fontWeight: 200}}>+</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}


export default NavBar;