import { create } from 'zustand'

interface BgImageState {
    bgImage: string
    changeImage: (newImage: string) => void
}

export const bgOptions = [
    { url: '/anime-bg.png', label: 'Anime' },
    { url: '/nature-bg.avif', label: 'Nature' },
]

const useImageStore = create<BgImageState>()((set) => ({
    bgImage: '/anime-bg.png',
    changeImage: (newImage) => set({ bgImage: newImage }),
}))

export const useBgImage = () => useImageStore((state) => state.bgImage)
export const useChangeImage = () => useImageStore((state) => state.changeImage)
