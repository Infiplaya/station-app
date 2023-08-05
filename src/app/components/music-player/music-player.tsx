'use client'
import YouTube, { YouTubeProps } from 'react-youtube'
import { useState } from 'react'

export function MusicPlayer({
    id,
    handlePlayerClick,
    index,
    activePlayer,
    label,
}: {
    id: string
    handlePlayerClick: (index: number) => void
    index: number
    activePlayer: number
    label: string
}) {
    const [isPlaying, setIsPlaying] = useState(false)

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }

    function handlePlay() {
        setIsPlaying(true)
        handlePlayerClick(index)
    }

    function handleStop() {
        setIsPlaying(false)
        handlePlayerClick(index)
    }

    return (
        <>
            {isPlaying && activePlayer == index ? (
                <button onClick={handleStop}>Pause</button>
            ) : (
                <button onClick={handlePlay}>Play</button>
            )}

            <p>{label}</p>

            {isPlaying && activePlayer == index ? (
                <YouTube videoId={id} style={{ display: 'none' }} opts={opts} />
            ) : null}
        </>
    )
}
