
import styles from './Sample.module.scss';

export default function Sample(){


    return (<>
    <div>
        <h3 className={styles.testColor}>KABOOM</h3>
    </div>
    <div className={styles.sample}>
        <h1>This is a sample Component</h1>
    </div>
    </>)
}