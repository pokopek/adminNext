import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span classname={styles.title}>Total Users</span>
                <span className={styles.number}>29.90</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12 %</span> more than week
                </span>
            </div>
        </div>
    )
}

export default Card