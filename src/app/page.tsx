import Image from 'next/image'
import { Pomodoro } from './components/pomodoro/pomodoro'
import { PomodoroProgress } from './components/pomodoro/progress/progress'
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
            <PomodoroProgress />
            <Pomodoro />
        </main>
    )
}
