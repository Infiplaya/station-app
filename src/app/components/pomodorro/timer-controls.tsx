'use client'

import { useTimerActions, useTimerActive } from '@/app/stores/pomodorrostore'

export function TimerControls() {
    const actions = useTimerActions()
    const isActive = useTimerActive()
    return (
        <div>
            <button onClick={actions.startTimer}>Start</button>
            <button onClick={actions.pauseTimer}>Stop</button>
            <button onClick={actions.resetTimer}>Reset</button>
            <div>
                {isActive ? 'Timer Active' : 'Timer Stopped'}
            </div>
        </div>
    )
}
