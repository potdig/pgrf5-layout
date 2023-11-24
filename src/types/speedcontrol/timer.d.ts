export type TimerState = 'stopped' | 'running' | 'paused' | 'finished'
export type TeamResult = 'forfeit' | 'completed'

export interface Timer {
  time: string
  state: TimerState
  milliseconds: number
  timestamp: number
  teamFinishTimes: {
    [id: string]: TeamFinishTime
  }
}

export interface TeamFinishTime {
  time: string
  state: TeamResult
  milliseconds: number
  timestamp: number
}

export interface RunFinishTimes {
  [id: string]: Timer
}
