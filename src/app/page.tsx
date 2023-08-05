import Image from 'next/image'
import { Pomodorro } from './components/pomodorro/pomodorro'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Pomodorro />
        </main>
    )
}
