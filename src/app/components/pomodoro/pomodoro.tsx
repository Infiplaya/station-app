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
    const isActive = useTimerActive()
    const sessionCount = useTimerSessionCount()
    const status = useTimerStatus()
    return (
        <div className={styles.card}>
            <Timer />
            <TimerControls />
            <div style={{ marginTop: '1rem' }}>
                {isActive ? 'Timer Active' : 'Timer Stopped'}
                <p>Session #{sessionCount}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    )
}
