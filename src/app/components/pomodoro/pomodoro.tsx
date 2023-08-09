'use client';

import {
  useTimerSessionCount,
  useTimerStatus,
} from '@/app/stores/pomodoro-store';
import { Timer } from './timer/timer';
import { TimerControls } from './timer-controls/timer-controls';
import { Card } from '../ui/card/card';

export function Pomodoro() {
  const sessionCount = useTimerSessionCount();
  const status = useTimerStatus();
  return (
    <Card cardId="pomodoro">
      <Timer />
      <TimerControls />
      <div style={{ marginTop: '1rem' }}>
        <p>Session #{sessionCount}</p>
        <p>{status.toLocaleUpperCase()}</p>
      </div>
    </Card>
  );
}
