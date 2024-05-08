
import Navigation from '../Navigation/Navigation';
import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs() {


    return (<>
        <div className={styles.container}>
            <div className={styles.breadcrumbs}>
                <div className={styles.item}>
                    Work orders
                    <i className='fa fa-chevron-right'></i>
                </div>
                <div className={styles.item}>
                    History
                    <i className='fa fa-chevron-right'></i>
                </div>
                <div className={`${styles.item} ${styles.active}`}>
                    WO-00001A
                </div>
            </div>
        </div>
    </>)
}