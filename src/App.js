import React from 'react';
import ReactDOM from 'react-dom';

import { Title } from './Components/Title'
import { Stars } from './Components/Stars';

import './style.css'

const appProps = {
  starValue: 3,
  title: 'Mitchell Holland',
  // subtitle: 'This is a subtitle for some reason',
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: {
        title: props.title,
        subtitle: props.subtitle
      },
      stars: {
        starCount: props.starValue,
        size: 35,
        color2: '#ff7e79',
        color1: '#424242',
      }
    }
  }

  render() {
    return (
      <div>
        <Title {...this.state.title} />
        <Stars {...this.state.stars} />
      </div>)
  }
}

ReactDOM.render(
  <App {...appProps} />,
  document.getElementById('root')
)
