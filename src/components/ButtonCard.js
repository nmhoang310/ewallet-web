import React from 'react'
import Button, { buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/system';

export default function ButtonCard(props) {
  return (
    <CustomButton
      startIcon={props.icon} style={{'backgroundColor': '#6f42c1'}} onClick={props.func}>
        {props.name}
    </CustomButton>
  )
}

const blue = {
    500: '#6f42c1',
    600: '#6610f2',
    700: '#6610f2',
  };

const CustomButton = styled(Button)(`
font-family:sans-serif;
font-size: 0.875rem;
background-color: ${blue[500]};
padding: 9px 15px;
border-radius: 8px;
color: white;
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
}`)
  
;
