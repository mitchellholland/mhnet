import React from 'react';
import ReactDOM from 'react-dom';

import { Title } from './Components/Title'
import { Stars } from './Components/Stars';

const appProps = {
  starValue: 3,
  title: 'Mitchell Holland',
  subtitle: 'subtitle'

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
        size: 30,
        color2: '#ffd700',
        color1: 'gray',
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