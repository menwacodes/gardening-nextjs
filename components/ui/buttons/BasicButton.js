import styles from "./BasicButton.module.scss";

const BasicButton = props => {
    return (
        <button
            className={ styles.button }
            type={ props.type || "button" }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
};

export default BasicButton;