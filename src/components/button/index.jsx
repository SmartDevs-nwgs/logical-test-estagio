import React from 'react';
import { ButtonOp } from './style';

const Button = ({ onClick,children }) => {
    return(
        <ButtonOp onClick={onClick} >{ children }</ButtonOp>
    )
}

export default Button;