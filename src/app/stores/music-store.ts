import { create } from 'zustand'

interface MusicState {
    currentSongId: string
    setCurrentSongId: (id: string) => void
}

const useMusicStore = create<MusicState>()((set) => ({
    currentSongId: '',
    setCurrentSongId: (id) => set({ currentSongId: id }),
}))

export const useChangeCurrentSongId = () =>
    useMusicStore((state) => state.setCurrentSongId)
export const useCurrentSongId = () =>
    useMusicStore((state) => state.currentSongId)

export const youtubeIds = ['jfKfPfyJRdk', '4xDzrJKXOOY']
