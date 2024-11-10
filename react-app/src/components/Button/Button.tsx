import styles from "./Button.module.css";

interface Props {
    color?: "primary" | "secondary" | "danger"
    children: string;
    onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <>
            <button
                type="button"
                // className={"btn btn-" + color}
                className={[styles.btn, styles.btnPrimary].join(" ")}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button