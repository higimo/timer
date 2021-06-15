import React from 'react';
import Timer from './component/timer';
import Hours from './component/hours';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <Hours />
      </div>
    );
  }
}

export default App;
