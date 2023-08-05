import { create } from 'zustand'

interface TimerState {
    timer: number
    isActive: boolean
    actions: Actions
}

interface Actions {
    startTimer: () => void
    pauseTimer: () => void
    resetTimer: () => void
    updateTimer: () => void
}

const DEFAULT_TIMER = 25 * 60
const DEFAULT_BREAK = 5 * 60

export const useTimerStore = create<TimerState>((set) => ({
    timer: DEFAULT_TIMER,
    break: DEFAULT_BREAK,
    session: 0,
    isActive: false,
    actions: {
        startTimer: () => set({ isActive: true }),
        pauseTimer: () => set({ isActive: false }),
        resetTimer: () => set({ isActive: false, timer: DEFAULT_TIMER }),
        updateTimer: () => set((state) => ({ timer: state.timer - 1 })),
    },
}))

export const useTimerActions = () => useTimerStore((state) => state.actions)
export const useTimerActive = () => useTimerStore((state) => state.isActive)
export const useTimer = () => useTimerStore((state) => state.timer)
