import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {


  render() {
    return (
      <div>
        <Hello title='Test 1' />
        <Hello title='Test 2' />
        <Hello title='Test 3' />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
