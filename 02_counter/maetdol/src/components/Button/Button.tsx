import './Button.style.css';

export function Button({children, type="button", onClick}: Props) {
    return <button type={type} onClick={onClick}>{children}</button>
}

type Props = { 
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}