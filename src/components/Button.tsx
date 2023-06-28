interface Props {
    children: String;
    // ? makes the variable optional, we've added a default via color='primary'
    color?: 'primary' | 'secondary' | 'danger' ;
    onClick: () => void;
}

const Button = ({children, color = 'primary', onClick}: Props) => {
    return (
        <div className={"btn btn-" + color} onClick={onClick}>{children}</div>
    )
}

export default Button;