import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    elapsedSeconds: 0,
  }

  renderMinutes = () => {
    const {elapsedSeconds} = this.state
    const minutes = Math.floor(elapsedSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {elapsedSeconds} = this.state
    const seconds = Math.floor(elapsedSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  updateTimer = () => {
    this.setState(prevState => ({elapsedSeconds: prevState.elapsedSeconds + 1}))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, elapsedSeconds: 0})
  }

  render() {
    const {isTimeRunning} = this.state

    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="appContainer">
          <h1 className="stopWatchHeading">Stopwatch</h1>
          <div className="stopWatchContainer">
            <div className="timerHeadingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="imgIcon"
              />
              <p className="headingPara">Timer</p>
            </div>
            <h1 className="timerHead">{time}</h1>
            <div className="timerButtonsContainer">
              <button
                className="stopWatchTimer green"
                disabled={isTimeRunning}
                onClick={this.startTimer}
                type="button"
              >
                Start
              </button>
              <button
                className="stopWatchTimer red"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="stopWatchTimer orange"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
