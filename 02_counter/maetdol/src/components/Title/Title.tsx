import './Title.style.css';

export default function Title({children}: Props) {
    return <h2>{children}</h2>
}

type Props = {
    children: React.ReactNode
}