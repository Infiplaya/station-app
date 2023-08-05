'use client'

import {
    useTimerActive,
    useTimerSessionCount,
    useTimerStatus,
} from '@/app/stores/pomodorostore'
import { Timer } from './timer/timer'
import { TimerControls } from './timer-controls/timer-controls'
import { Card } from '../ui/card'

export function Pomodoro() {
    const sessionCount = useTimerSessionCount()
    const status = useTimerStatus()
    return (
        <Card>
            <Timer />
            <TimerControls />
            <div style={{ marginTop: '1rem' }}>
                <p>Session #{sessionCount}</p>
                <p>{status.toLocaleUpperCase()}</p>
            </div>
        </Card>
    )
}
