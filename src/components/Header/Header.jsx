import React from 'react'
import './Header.css'

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                className={`head-image ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contracted'
                    }`}
                src="header-image.png"
                alt="headerImage"
            />
            <h1 className={`head-text ${headerExpanded
                ? 'head-text-expanded'
                : 'head-text-contracted'
                }`}>{headTitle}</h1>
        </div>
    )
}

export default Header;