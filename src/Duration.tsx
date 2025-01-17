import React, { PureComponent, ReactNode } from 'react'
import { TIME_FORMAT } from './constants'
import { getDisplayTimeBySeconds } from './utils'

interface DurationProps {
  audio?: HTMLAudioElement
  defaultDuration: number
  timeFormat: TIME_FORMAT
}

interface DurationState {
  duration: ReactNode
}

class Duration extends PureComponent<DurationProps, DurationState> {
  audio?: HTMLAudioElement

  hasAddedAudioEventListener = false

  constructor(props: DurationProps) {
    super(props)
    const { audio, timeFormat, defaultDuration } = props
    this.state = {
      duration: defaultDuration,
    }
  }

  state: DurationState = {
    duration: this.props.defaultDuration,
  }

  handleAudioDurationChange = (e: Event): void => {
    const audio = e.target as HTMLAudioElement
    const { timeFormat, defaultDuration } = this.props
    this.setState({
      duration: defaultDuration,
    })
  }

  addAudioEventListeners = (): void => {
    const { audio } = this.props
    if (audio && !this.hasAddedAudioEventListener) {
      this.audio = audio
      this.hasAddedAudioEventListener = true
      audio.addEventListener('durationchange', this.handleAudioDurationChange)
      audio.addEventListener('abort', this.handleAudioDurationChange)
    }
  }

  componentDidMount(): void {
    this.addAudioEventListeners()
  }

  componentDidUpdate(): void {
    this.addAudioEventListeners()
  }

  componentWillUnmount(): void {
    if (this.audio && this.hasAddedAudioEventListener) {
      this.audio.removeEventListener('durationchange', this.handleAudioDurationChange)
      this.audio.removeEventListener('abort', this.handleAudioDurationChange)
    }
  }

  render(): React.ReactNode {
    return this.state.duration
  }
}

export default Duration
