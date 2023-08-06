'use client'
import styles from '@/app/components/pomodoro/timer-controls/timer-controls.module.css'
import iconStyles from '@/app/page.module.css'

import { useTimerActions, useTimerActive } from '@/app/stores/pomodorostore'
import { Pause, Play, TimerReset } from 'lucide-react'

export function TimerControls() {
    const actions = useTimerActions()
    const isActive = useTimerActive()
    return (
        <div className={styles.controls}>
            {isActive ? (
                <Pause
                    onClick={actions.pauseTimer}
                    className={iconStyles.icon}
                />
            ) : (
                <Play
                    onClick={actions.startTimer}
                    className={iconStyles.icon}
                />
            )}
            <TimerReset
                onClick={actions.resetTimer}
                className={iconStyles.icon}
            />
        </div>
    )
}
