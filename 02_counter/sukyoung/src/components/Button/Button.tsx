import './Button.style.css';

const Button = ({children, ...props}: any) => {

  return (
    <button 
      type="button"
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}

export default Button;