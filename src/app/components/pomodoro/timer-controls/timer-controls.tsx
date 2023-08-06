'use client'
import styles from '@/app/components/pomodoro/timer-controls/timer-controls.module.css'
import iconStyles from '@/app/page.module.css'

import { useTimerActions, useTimerActive } from '@/app/stores/pomodorostore'
import { Pause, Play, TimerReset } from 'lucide-react'
import { toast } from 'sonner'

export function TimerControls() {
    const actions = useTimerActions()
    const isActive = useTimerActive()
    return (
        <div className={styles.controls}>
            {isActive ? (
                <Pause
                    onClick={() => {
                        actions.pauseTimer()
                        toast.success('Stopped pomodoro timer')
                    }}
                    className={iconStyles.icon}
                />
            ) : (
                <Play
                    onClick={() => {
                        actions.startTimer()
                        toast.success('Started pomodoro timer')
                    }}
                    className={iconStyles.icon}
                />
            )}
            <TimerReset
                onClick={() => {
                    actions.resetTimer()
                    toast.success('Timer was reset')
                }}
                className={iconStyles.icon}
            />
        </div>
    )
}
