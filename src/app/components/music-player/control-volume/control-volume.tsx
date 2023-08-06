import { useAudioVolume, useChangeVolume } from '@/app/stores/music-store'
import * as Slider from '@radix-ui/react-slider'
import styles from '@/app/components/music-player/control-volume/control-volume.module.css'
import { YouTubePlayer } from 'react-youtube'


export function ControlVolume({ player }: { player: YouTubePlayer }) {
    const audioVolume = useAudioVolume()
    const changeAudioVolume = useChangeVolume()

    function handleVolumeChange(value: number[]) {
        changeAudioVolume(value[0])
        player.setVolume(value[0])
    }

    return (
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
            <Slider.Thumb className={styles.SliderThumb} aria-label="Volume" />
        </Slider.Root>
    )
}
