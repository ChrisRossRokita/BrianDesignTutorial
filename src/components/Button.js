import React, { Component } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { mediumaquamarine } from 'color-name';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.include(bottonStyle) ? buttonStyle : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : Sizes[0]
return (
    <Link to='/sign-up' className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    </Link>
)
};
