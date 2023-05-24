import React from 'react'
import Button, { buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/system';

export default function ButtonLogin(props) {
    const blue = {
        500: props.color_500,
        600: props.color_600,
        700: props.color_700,
      };
    
    const CustomButton = styled(Button)`
      font-family:sans-serif;
      font-size: 1rem;
      font-weight: bold;
      background-color: ${blue[500]};
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 9999px;
      color: white;
      width: 100%;
      transition: all 150ms ease;
      cursor: pointer;
      border: none;
      text-transform: none;
    
      &:hover {
        background-color: ${blue[600]};
      }
    
      &.${buttonClasses.active} {
        background-color: ${blue[700]};
      }
    
      &.${buttonClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
      }
    `;
    
    


  return (
    <CustomButton
      startIcon={props.icon} style={{'backgroundColor': props.color_500}} onClick={props.func}>
        {props.name}
    </CustomButton>
  )
}

