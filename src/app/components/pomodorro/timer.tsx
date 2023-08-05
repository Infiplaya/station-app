'use client'

import {
    useTimer,
    useTimerActions,
    useTimerActive,
} from '@/app/stores/pomodorrostore'
import { useEffect } from 'react'

export function Timer() {
    const timer = useTimer()
    const isActive = useTimerActive()
    const { updateTimer } = useTimerActions()

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (!isActive) return
        intervalId = setInterval(() => {
            updateTimer()
        }, 1000)

        return () => clearInterval(intervalId)
    }, [isActive, updateTimer])
    
    return (
        <div>
            Timer
            {timer}
        </div>
    )
}
