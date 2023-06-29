import React from 'react';
import "./Button.css";
import {Link} from "react-router-dom";

export const Button = ({children}) => {
  return (
    <Link to="/" className="btn-mobile">
        <button className='btn'>
            {children}
        </button>
    </Link>
  )
}


