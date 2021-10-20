import react from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <BrowserRouter forceRefresh={true}>
                <ul>
                    <li><NavLink to='/search/cats'>Cats</NavLink></li>
                    <li><NavLink to='/search/puppies'>Puppies</NavLink></li>
                    <li><NavLink to='/search/zebra'>Zebra</NavLink></li>
                </ul>
            </BrowserRouter>
        </nav>
    );
}

export default Nav;