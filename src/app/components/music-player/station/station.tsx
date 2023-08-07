'use client'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'
import { useState } from 'react'
import {
    useAudioVolume,
    useChangeCurrentSongId,
    useChangePlayer,
    useCurrentSongId,
    useIsPlaying,
    useStartPlaying,
    useStopPlaying,
} from '@/app/stores/music-store'
import { ControlVolume } from '../control-volume/control-volume'
import { Pause, Play } from 'lucide-react'
import iconStyles from '@/app/page.module.css'
import { toast } from 'sonner'
import styles from '@/app/components/music-player/station/station.module.css'

export function MusicStation({ id, label }: { id: string; label: string }) {
    const currentSongId = useCurrentSongId()
    const changeCurrentId = useChangeCurrentSongId()
    const audioVolume = useAudioVolume()
    const changePlayer = useChangePlayer()
    const isPlaying = useIsPlaying()
    const startPlaying = useStartPlaying()
    const stopPlaying = useStopPlaying()

    const shouldPlaySong = isPlaying && id === currentSongId

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.setVolume(audioVolume)
        changePlayer(event.target)
    }

    const opts: YouTubeProps['opts'] = {
        height: '500',
        width: '600',
        playerVars: {
            autoplay: 1,
        },
    }

    function handlePlay() {
        startPlaying()
        changeCurrentId(id)
        toast(`Started playing station ${label}`)
    }

    function handleStop() {
        stopPlaying()
        toast(`Stopped playing station ${label}`)
        changeCurrentId('')
    }

    if (shouldPlaySong) {
        return (
            <div className={styles.MusicStation}>
                <h4>{label}</h4>
                <Pause className={iconStyles.icon} onClick={handleStop} />
                <YouTube
                    videoId={id}
                    style={{ display: 'none' }}
                    opts={opts}
                    onReady={onPlayerReady}
                />
            </div>
        )
    }

    return (
        <div className={styles.MusicStation}>
            <h4>{label}</h4>
            <Play className={iconStyles.icon} onClick={handlePlay} />
        </div>
    )
}
