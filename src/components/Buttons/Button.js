import styles from './Button.module.scss'
const Button = props => {
    return(
        <div>
            <button className={styles.button} onClick={props.handleStart}>Start</button>
            <button className={styles.button} onClick={props.handlePause}>Pause</button>
            <button className={styles.button} onClick={props.handleReset}>Reset</button>
        </div>
    );
}
export default Button;