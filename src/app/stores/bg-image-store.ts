import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BgImageState {
    bgImage: string
    changeImage: (newImage: string) => void
}

export const bgOptions = [
    { url: '/anime-bg.png', label: 'Anime' },
    { url: '/nature-bg.jpg', label: 'Nature' },
]

const useImageStore = create<BgImageState>()(persist((set) => ({
    bgImage: '/anime-bg.png',
    changeImage: (newImage) => set({ bgImage: newImage }),
}), {
    name: 'image-storage'
}))

export const useBgImage = () => useImageStore((state) => state.bgImage)
export const useChangeImage = () => useImageStore((state) => state.changeImage)
