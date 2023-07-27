import React from 'react';
import "./Button.css";
import {Link} from "react-router-dom";

export const Button = ({children}) => {
  return (
        <button type="submit" className='btn'>
            {children}
        </button>
  )
}


