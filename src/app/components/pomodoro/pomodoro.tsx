'use client'

import {
    useTimerActive,
    useTimerSessionCount,
    useTimerStatus,
} from '@/app/stores/pomodorostore'
import { Timer } from './timer/timer'
import { TimerControls } from './timer-controls/timer-controls'
import styles from '@/app/page.module.css'

export function Pomodoro() {
    const sessionCount = useTimerSessionCount()
    const status = useTimerStatus()
    return (
        <div className={styles.card}>
            <Timer />
            <TimerControls />
            <div style={{ marginTop: '1rem' }}>
                <p>Session #{sessionCount}</p>
                <p>{status.toLocaleUpperCase()}</p>
            </div>
        </div>
    )
}
