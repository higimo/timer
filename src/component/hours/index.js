import React from 'react'
import getNoun from 'get-noun'

import './style.css'

export default class Hours extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      percent: '',
      hours: 0,
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const persent = parseInt(event.currentTarget.value, 10)
    
    this.setState({
      percent: persent,
      hours: Math.round((persent / 100) * 8 * 60),
    })
  }


  render() {
    const { percent, hours } = this.state
    return (
      <div className="hours-calc">
        <div className="hours-calc__text">Сколько в минутах занимает процент от рабочего дня.</div>
        <input
          className="hours-calc__input"
          onChange={this.handleChange}
          value={percent}
          />
          <div className="hours-calc__percent">%</div>
          <div className="hours-calc__result">{hours} {getNoun(hours, ['минута', 'минуты', 'минут'])}</div>
      </div>
    )
  }
}