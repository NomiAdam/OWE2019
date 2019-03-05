import React, { Component } from 'react';
import ApplicationBar from './components/ApplicationBar';
import Content from './components/Content';

class App extends Component {
    render() {
    return (
      <div className={'Body'}>
        <ApplicationBar />
        <Content />
      </div>
    );
  }
}

export default App;
