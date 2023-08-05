import { create } from 'zustand'

interface TimerState {
    timer: number
    isActive: boolean
    status: 'break' | 'work'
    actions: Actions
    sessionCount: number
}

interface Actions {
    startTimer: () => void
    pauseTimer: () => void
    resetTimer: () => void
    updateTimer: () => void
    startBreak: () => void
    startWork: () => void
    updateSessionCount: () => void
}

const DEFAULT_TIMER = 10
const DEFAULT_BREAK = 5

export const useTimerStore = create<TimerState>((set) => ({
    status: 'work',
    timer: DEFAULT_TIMER,
    break: DEFAULT_BREAK,
    sessionCount: 1,
    isActive: false,
    actions: {
        startTimer: () => set({ isActive: true }),
        pauseTimer: () => set({ isActive: false }),
        resetTimer: () =>
            set((state) => ({
                isActive: false,
                timer: state.status == 'break' ? DEFAULT_BREAK : DEFAULT_TIMER,
            })),
        updateTimer: () => set((state) => ({ timer: state.timer - 1 })),
        updateSessionCount: () =>
            set((state) => ({ sessionCount: state.sessionCount + 1 })),
        startBreak: () =>
            set({ status: 'break', isActive: false, timer: DEFAULT_BREAK }),
        startWork: () =>
            set((state) => ({
                status: 'work',
                isActive: false,
                timer: DEFAULT_TIMER,
                sessionCount: state.sessionCount + 1,
            })),
    },
}))

export const useTimerActions = () => useTimerStore((state) => state.actions)
export const useTimerActive = () => useTimerStore((state) => state.isActive)
export const useTimerStatus = () => useTimerStore((state) => state.status)
export const useTimerSessionCount = () =>
    useTimerStore((state) => state.sessionCount)
export const useTimer = () => useTimerStore((state) => state.timer)
