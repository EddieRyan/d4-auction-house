interface Props {
    children: String;
}

const Button = ({children}: Props) => {
    return (
        <div className="btn btn-primary">{children}</div>
    )
}

export default Button;