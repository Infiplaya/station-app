import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type YouTubePlayer } from 'react-youtube'

interface MusicState {
    currentSongId: string
    setCurrentSongId: (id: string) => void
    audioVolume: number
    setAudioVolume: (value: number) => void
}

const useMusicStore = create<MusicState>()(
    persist(
        (set) => ({
            currentSongId: '',
            setCurrentSongId: (id) => set({ currentSongId: id }),
            audioVolume: 50,
            setAudioVolume: (value) => set({ audioVolume: value }),
        }),
        {
            name: 'music-storage',
        }
    )
)

export const useChangeCurrentSongId = () =>
    useMusicStore((state) => state.setCurrentSongId)

export const useCurrentSongId = () =>
    useMusicStore((state) => state.currentSongId)

export const useChangeVolume = () =>
    useMusicStore((state) => state.setAudioVolume)

export const useAudioVolume = () => useMusicStore((state) => state.audioVolume)

export const youtubeIds = [
    { id: 'jfKfPfyJRdk', label: 'Lofi Hip-Hop' },
    { id: '4xDzrJKXOOY', label: 'Lofi Syntwave' },
    { id: 'WCCovrKvAtU', label: 'Japanese City Pop' },
]

interface PlayerState {
    player: YouTubePlayer | null
    setPlayer: (player: YouTubePlayer) => void
    isPlaying: boolean
    startPlaying: () => void
    stopPlaying: () => void
}

const usePlayerStore = create<PlayerState>()((set) => ({
    isPlaying: false,
    startPlaying: () => set({ isPlaying: true }),
    stopPlaying: () => set({ isPlaying: false }),
    player: null,
    setPlayer: (newPlayer) => set({ player: newPlayer }),
}))

export const useChangePlayer = () => usePlayerStore((state) => state.setPlayer)
export const usePlayer = () => usePlayerStore((state) => state.player)
export const useIsPlaying = () => usePlayerStore((state) => state.isPlaying)
export const useStartPlaying = () => usePlayerStore((state) => state.startPlaying)
export const useStopPlaying = () => usePlayerStore((state) => state.stopPlaying)
