
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Request.module.scss';

export default function Request() {


    return (<>
        <Navigation />
        <Breadcrumbs />

        <div className={styles.container}>
            <div className={styles.requestHeader}>
                <h1 className={styles.requestName}>Req0001</h1>
                <Button type="white"><i className="fa fa-download"></i> Download <i className="fa fa-chevron-down"></i></Button>
            </div>

            <div className={styles.requestDetails}>
                <div className={styles.item}>
                    <label className={styles.val} htmlFor="">Date Submitted</label>
                    <p className={styles.val}>Apr 18, 2024</p>
                </div>
                <div className={styles.item}>
                    <label className={styles.val} htmlFor="">Request Type</label>
                    <p className={styles.val}>Creation</p>
                </div>
                <div className={styles.item}>
                    <label className={styles.val} htmlFor="">Status</label>
                    <p className={styles.val}><span className={styles.badge}>Closed</span></p>
                </div>
            </div>


            <div className={styles.custGrid}>
                <div className={styles['col-8']}>
                    <div className={styles.customerDetails}>
                        <h2>Customer Details</h2>
                        <div className={styles.requestDetails}>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Customer / Business Name</label>
                                <p className={styles.val}>Golden Arches</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Customer Business Name / style</label>
                                <p className={styles.val}>McDonalds</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Customer Business Address</label>
                                <p className={styles.val}><span>755 AAA Street. New City, Philippines</span></p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">VAT/Non-VAT_Registered TIN</label>
                                <p className={styles.val}>123-456-789-000 0000</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Email Address</label>
                                <p className={styles.val}>GoldenArches@mcdo.com</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Mobile Number</label>
                                <p className={styles.val}>+63 (917) 000 0000</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Notes</label>
                                <p className={styles.val}>SI1223442</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles['col-4']}>
                    <div className={styles.receiptDetails}>
                        <h2>Receipt Details</h2>
                        <div className={styles.requestDetails}>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Transaction Type</label>
                                <p className={styles.val}><span className={styles.badge}>Payment</span></p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Document Number</label>
                                <p className={styles.val}>0000000</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Issuance Date</label>
                                <p className={styles.val}>MM DD YYYYY</p>
                            </div>
                            <div className={styles.item}>
                                <label className={styles.val} htmlFor="">Issued By</label>
                                <p className={styles.val}>Alex Marie Cunanan</p>
                            </div>

                        </div>
                        <div className={styles.btnGroup}>
                            <Button type='primary'>Vuew receipt</Button>
                            <Button type='primary'>Download Receipt</Button>
                        </div>
                        <div className={styles.btnGroup}>
                            <Button type='secondary'>Request cancellation</Button>
                            <Button type='secondary'>Re-print</Button>
                            <Button type='secondary'>Re-trasnmit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}