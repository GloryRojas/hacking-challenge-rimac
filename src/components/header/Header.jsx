import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <Link to="/"><img src="https://user-images.githubusercontent.com/45070947/60678755-23b04080-9e4b-11e9-98dc-f0a9d9980cb9.jpg" alt="" className="header__img"/></Link>
    </header>
);

export default Header;