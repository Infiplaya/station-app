'use client'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'
import { useState } from 'react'
import {
    useAudioVolume,
    useChangeCurrentSongId,
    useCurrentSongId,
} from '@/app/stores/music-store'
import { ControlVolume } from './control-volume/control-volume'
import { Pause, Play } from 'lucide-react'
import iconStyles from '@/app/page.module.css'
import { toast } from 'sonner'
import { MusicInfo } from './music-info'


export function MusicPlayer({ id, label }: { id: string; label: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const currentSongId = useCurrentSongId()
    const changeCurrentId = useChangeCurrentSongId()
    const audioVolume = useAudioVolume()
    const [player, setPlayer] = useState<YouTubePlayer | null>(null)

    const shouldPlaySong = isPlaying && id === currentSongId

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.setVolume(audioVolume)
        setPlayer(event.target)
    }

    const opts: YouTubeProps['opts'] = {
        height: '500',
        width: '600',
        playerVars: {
            autoplay: 1,
        },
    }

    function handlePlay() {
        setIsPlaying(true)
        changeCurrentId(id)
        toast(`Started playing station ${label}`)
    }

    function handleStop() {
        setIsPlaying(false)
        toast(`Stopped playing station ${label}`)
        changeCurrentId('')
    }

    if (shouldPlaySong) {
        return (
            <>
                <h4>{label}</h4>
                <Pause className={iconStyles.icon} onClick={handleStop} />
                <ControlVolume player={player} />
                {audioVolume}
                <YouTube
                    videoId={id}
                    style={{ display: 'none' }}
                    opts={opts}
                    onReady={onPlayerReady}
                />
            </>
        )
    }

    return (
        <>
            <h4>{label}</h4>
            <Play className={iconStyles.icon} onClick={handlePlay} />
        </>
    )
}
