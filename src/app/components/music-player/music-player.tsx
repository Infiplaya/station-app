'use client'
import { Card } from '../ui/card'
import YouTube, { YouTubeProps } from 'react-youtube'

export function MusicPlayer() {

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <Card>
            <h3>Youtube Music</h3>
            <YouTube
                videoId="jfKfPfyJRdk"
                opts={opts}
            />
        </Card>
    )
}
