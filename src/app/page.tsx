import Image from 'next/image'
import { Pomodorro } from './components/pomodorro/pomodorro'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <Image
                    src="/anime-bg.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="bg-image"
                />
            </div>
            <Pomodorro />
        </main>
    )
}
