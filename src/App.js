import React from 'react'
import ReactDOM from 'react-dom'

import { Title } from './Components/Title'
import { Stars } from './Components/Stars'

import Twitter from 'react-icons/lib/fa/twitter-square'
import GitHub from 'react-icons/lib/fa/github-square'

const appProps = {
  starValue: 3,
  title: 'Mitchell Holland',
}

const iconProps = {
  padding:20,
  paddingTop: 200,
  color: "A9A9A9"
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
        <div className="icons">
          <a href="https://github.com/mitchellholland"><GitHub size={44} style={{iconProps}}/></a>
          <a href="https://twitter.com/mrxhus"><Twitter size={44} style={{iconProps}}/></a>
        </div>
      </div>)
  }
}

ReactDOM.render(
  <App {...appProps} />,
  document.getElementById('root')
)
