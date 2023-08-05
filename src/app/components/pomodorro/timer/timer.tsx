'use client'

import {
    useTimer,
    useTimerActions,
    useTimerActive,
    useTimerStatus,
} from '@/app/stores/pomodorrostore'
import { SkipForward } from 'lucide-react'
import { useEffect } from 'react'
import styles from '@/app/components/pomodorro/timer/timer.module.css'

export function Timer() {
    const timer = useTimer()
    const isActive = useTimerActive()
    const status = useTimerStatus()
    const {
        updateTimer,
        startBreak,
        updateSessionCount,
        startWork,
        skipTimer,
    } = useTimerActions()

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (!isActive) return
        intervalId = setInterval(() => {
            updateTimer()
        }, 1000)

        if (timer == 0) {
            if (status == 'break') {
                startWork()
            } else {
                startBreak()
            }
        }

        return () => clearInterval(intervalId)
    }, [
        isActive,
        updateTimer,
        timer,
        startBreak,
        startWork,
        status,
        updateSessionCount,
    ])

    return (
        <div className={styles.timerWrapper}>
            <h3 className={styles.timer}>{secondsToMinutes(timer)}</h3>
            <SkipForward onClick={skipTimer} className={styles.skipIcon} />
        </div>
    )
}

function secondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
