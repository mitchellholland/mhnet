import React from 'react'

export class Title extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      subtitle: props.subtitle
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
      </div>
    )
  }
}