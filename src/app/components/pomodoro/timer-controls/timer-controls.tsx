'use client'
import styles from "@/app/components/pomodoro/timer-controls/timer-controls.module.css"

import { useTimerActions} from '@/app/stores/pomodorostore'

export function TimerControls() {
    const actions = useTimerActions()
    return (
        <div className={styles.controls}>
            <button onClick={actions.startTimer}>Start</button>
            <button onClick={actions.pauseTimer}>Stop</button>
            <button onClick={actions.resetTimer}>Reset</button>
        </div>
    )
}
