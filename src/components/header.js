import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">Home</Link>
            </h1>
        </header>
    )
}

export default Header