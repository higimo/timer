import React from 'react'
import getNoun from 'get-noun'

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

  handleChange(val) {
    let value = val.target.value

    if (val.target.name === 'start') {
      this.setState({
        end: value
      })
    }

    this.setState({
      [val.target.name]: value
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
    const self = this,
      result   = new Date((new Date(this.getTime(this.state.end))) - (new Date(this.getTime(this.state.start))))
    const { percent, hours } = this.state
    return (
      <div className="timer-calc">
        <div className="timer-calc__text">
          Посчитаем разницу во времени.
        </div>
        <input
          onChange={self.handleChange}
          maxLength="5"
          className="timer-calc__start"
          name="start"
          value={this.state.start}
          />
        <input
          onChange={self.handleChange}
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