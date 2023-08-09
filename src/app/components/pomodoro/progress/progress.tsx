'use client'

import {
    useDefaultTimer,
    useTimer,
    useTimerActive,
} from '@/app/stores/pomodoro-store'
import * as Progress from '@radix-ui/react-progress'
import { useEffect, useState } from 'react'
import styles from '@/app/components/pomodoro/progress/progress.module.css'

export function PomodoroProgress() {
    const [progress, setProgress] = useState(0)
    const currentTimer = useTimer()
    const baseTimer = useDefaultTimer()
    const timerStarted = useTimerActive()
    const isActive = currentTimer != baseTimer || timerStarted

    useEffect(() => {
        const delta = (currentTimer / baseTimer) * 100
        const timer = setInterval(() => setProgress(delta), 100)
        return () => clearInterval(timer)
    }, [currentTimer, baseTimer])

    return (
        <Progress.Root
            className={styles.progressRoot}
            style={!isActive ? { display: 'none' } : { display: 'block' }}
            value={progress}
        >
            <Progress.Indicator
                className={styles.progressIndicator}
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    )
}
