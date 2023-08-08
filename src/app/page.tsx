import { ControlVolume } from './components/music-player/control-volume/control-volume'
import { MusicPlayersList } from './components/music-player/players-list'
import { Pomodoro } from './components/pomodoro/pomodoro'
import { PomodoroProgress } from './components/pomodoro/progress/progress'
import { TaskList } from './components/tasks/task-list'

export default function Home() {
    return (
        <main>
            <PomodoroProgress />
            <ControlVolume />
            <Pomodoro />
            <MusicPlayersList />
            <TaskList />
        </main>
    )
}
