import { ReactElement } from 'react';
import './Button.style.css';

interface IButton {
  children: string;
  onClick: () => void;
}

const Button = ({children, onClick}: IButton): ReactElement => {

  return (
    <button 
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;