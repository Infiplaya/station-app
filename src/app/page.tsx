import { Toaster } from 'sonner'
import { MusicPlayersList } from './components/music-player/players-list'
import { Pomodoro } from './components/pomodoro/pomodoro'
import { PomodoroProgress } from './components/pomodoro/progress/progress'
import { TaskList } from './components/tasks/task-list'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <PomodoroProgress />
            <Pomodoro />
            <MusicPlayersList />
            <TaskList />
        </main>
    )
}
