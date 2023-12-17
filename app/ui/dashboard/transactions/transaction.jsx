import Image from 'next/image'
import styles from './transaction.module.css'


const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            Darwanto
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                pending
                            </span>
                        </td>
                        <td>14, 287</td>
                        <td>Rp 200.000</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            Darwanto
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                done
                            </span>
                        </td>
                        <td>14, 287</td>
                        <td>Rp 200.000</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            Darwanto
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                cancelled
                            </span>
                        </td>
                        <td>14, 287</td>
                        <td>Rp 200.000</td>
                    </tr>
                </tbody>


            </table>
        </div>
    )
}

export default Transactions