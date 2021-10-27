import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to="/">Hlavní stránka</Link>
            <Link to="/add-material">Přidání materiálu</Link>
            <div>Surovina: </div>
        </div>
    )
}

export default Menu
