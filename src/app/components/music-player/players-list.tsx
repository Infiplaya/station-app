import { Card } from '../ui/card'
import { youtubeIds } from '@/app/stores/music-store'
import { MusicStation } from './station/station'

export function MusicPlayersList() {
    return (
        <Card cardId="music-player">
            <h3>Play Something</h3>
            {youtubeIds.map((station, index) => (
                <div key={station.id} style={{ marginTop: '1rem' }}>
                    <MusicStation id={station.id} label={station.label} />
                </div>
            ))}
        </Card>
    )
}
