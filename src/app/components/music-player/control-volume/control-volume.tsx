'use client'

import {
    useAudioVolume,
    useChangeVolume,
    useIsPlaying,
    usePlayer,
} from '@/app/stores/music-store'
import * as Slider from '@radix-ui/react-slider'
import styles from '@/app/components/music-player/control-volume/control-volume.module.css'
import { Volume } from 'lucide-react'

export function ControlVolume() {
    const audioVolume = useAudioVolume()
    const changeAudioVolume = useChangeVolume()
    const player = usePlayer()
    const isPlaying = useIsPlaying()

    function handleVolumeChange(value: number[]) {
        changeAudioVolume(value[0])
        player.setVolume(value[0])
    }

    if (!isPlaying) {
        return null
    }

    return (
        <div className={styles.ControlVolume}>
            <div className={styles.Volume}>
                <Volume /> <span>{audioVolume}</span>
            </div>
            <Slider.Root
                className={styles.SliderRoot}
                defaultValue={[audioVolume]}
                max={100}
                step={1}
                onValueChange={(value) => handleVolumeChange(value)}
            >
                <Slider.Track className={styles.SliderTrack}>
                    <Slider.Range className={styles.SliderRange} />
                </Slider.Track>
                <Slider.Thumb
                    className={styles.SliderThumb}
                    aria-label="Volume"
                />
            </Slider.Root>
        </div>
    )
}
