import React from 'react'

import './style.css'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      start  : '00:00',
      end    : '00:00'
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let value = event.target.value

    if (event.target.name === 'start') {
      this.setState({
        end: value
      })
    }

    this.setState({
      [event.currentTarget.name]: value
    })
  }

  getTime(time) {
    let res = time

    if (res.length === 3 || res.length === 4) {
      const count = res.match(/\d/g).length

      if (count === 3 || count === 4) {
        res = res.replace(/(\d\d)(\d\d?)/g, '$1:$2')
      }
    }

    while (res.length < 5) {
      if (res.length === 2) {
        res += ':'
      } else {
        res += '0'
      }
    }

    res = `2017-12-31 ${res.replace(/(\.|\/|,)/g, ':')}`
    
    return res
  }

  render() {
    const { start, end } = this.state,
      result = new Date((new Date(this.getTime(end))) - (new Date(this.getTime(start))))
    
    return (
      <div className="timer-calc">
        <div className="timer-calc__text">
          Посчитаем разницу во времени.
        </div>
        <input
          onChange={this.handleChange}
          maxLength="5"
          className="timer-calc__start"
          name="start"
          value={this.state.start}
          />
        <input
          onChange={this.handleChange}
          maxLength="5"
          className="timer-calc__end"
          name="end"
          value={this.state.end}
          />
        <div className="timer-calc__result">&nbsp;= {result.toISOString().substr(11, 5)}</div>
      </div>
    )
  }
}