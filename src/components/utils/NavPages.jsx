import React from 'react';
import './navpages.scss';

const NavPages = (props) => {
    return(
        <div className="navpages">
            <span className="navpages__arrow">&#60;</span>
            <span className="navpages__page"><span className="navpages__page--actual">{props.page}</span> DE 4</span>
        </div>
    )
};

export default NavPages;