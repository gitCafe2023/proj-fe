import styles from './Navigation.module.scss';

function Navigation() {

    return (<>
        <nav className={styles.nav}>
            <div className={styles.navTop}>
                <div className={styles.navLeft}>
                    <span className={styles.navTitle}>G-Receipt</span>

                    <div className={styles.inpSearch}>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='Type search here' />
                    </div>
                </div>

                <div className={styles.navRight}>
                    <div className={styles.bl}>
                        <i className={`fa fa-bell fa-2x ${styles.faBell}`}></i>
                    </div>
                    <div className={styles.userDetails}>
                        <div>
                        <p>Anya Reyes</p>
                        <p className={styles.role}>Role</p>
                        </div>
                        

                        <div className={styles.circle}>AR</div>
                        <i className='fa fa-chevron-down'></i>
                    </div>
                    <div className={styles.bl}>
                        <span>Globe</span>
                    </div>
                </div>
            </div>


            <div className={styles.navBot}>
                <div className={styles.opt}>
                    Dashboard
                </div>
                <div className={`${styles.opt} ${styles.active}`}>
                    Requests
                </div>
                <div className={styles.opt}>
                    Transactions
                </div>
            </div>


        </nav>


    </>)
}

export default Navigation;