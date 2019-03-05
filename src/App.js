import React, { Component } from 'react';
import ApplicationBar from './components/ApplicationBar';
import Content from './components/Content';

const style = {
  height: '100vh',
  width: '100%',
};

class App extends Component {
  render() {
    return (
      <div style={ style }>
        <ApplicationBar />
        <Content />
      </div>
    );
  }
}

export default App;
