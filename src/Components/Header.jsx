import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header style={{ padding: "10px" }}>
            <h1>Community Help Exchange</h1>
            <nav>
                <NavLink to ="/">All</NavLink>
                <NavLink to="/requests">Requests</NavLink>
                <NavLink to="/offers">Offers</NavLink>
                <NavLink to="/newpost">New Post</NavLink>
            </nav>
        </header>
    );
}
export default Header;