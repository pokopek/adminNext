import styles from "/app/ui/dashboard/users/users.module.css"
import Search from "/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Paginition from "/app/ui/dashboard/pagination/pagination"

const UserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40}
                                    className={styles.userImage} />
                                darwanto
                            </div>
                        </td>
                        <td>pokopek@gmail.com </td>
                        <td>23 Desember 2023</td>
                        <td>admin </td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
            <Paginition />
        </div>
    )
}

export default UserPage