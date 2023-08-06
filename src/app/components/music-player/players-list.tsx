import { Card } from '../ui/card'
import { youtubeIds } from '@/app/stores/music-store'
import { MusicPlayer } from './music-player'

export function MusicPlayersList() {
    return (
        <Card>
            <h3>Play Something</h3>
            {youtubeIds.map((station, index) => (
                <div key={station.id}>
                    <MusicPlayer
                        id={station.id}
                        label={station.label}
                    />
                </div>
            ))}
        </Card>
    )
}
