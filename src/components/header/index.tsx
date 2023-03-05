import styles from './header.module.css'

export default function Header(){
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Blog Post</h1>
        </header>
    )
}