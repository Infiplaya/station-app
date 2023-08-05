'use client'
import { Card } from '../ui/card'
import { youtubeIds } from '@/app/stores/music-store'
import { MusicPlayer } from './music-player'
import { useState } from 'react'

export function MusicPlayersList() {
    const [activePlayer, setActivePlayer] = useState(0)

    const handlePlayerClick = (index: number) => {
        setActivePlayer(index)
    }
    return (
        <Card>
            <h3>Play Something</h3>
            {youtubeIds.map((station, index) => (
                <div key={station.id}>
                    <MusicPlayer
                        id={station.id}
                        label={station.label}
                        activePlayer={activePlayer}
                        index={index}
                        handlePlayerClick={handlePlayerClick}
                    />
                </div>
            ))}
        </Card>
    )
}
