import React from 'react'
import ReactStars from 'react-stars'
import { connectSocket, sendStarRating } from '../socket'

export class Stars extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: props.starCount,
      onChange: this.onChange,
      size: props.size,
      color2: props.color2,
      color1: props.color1,
      count: 5,
      half: false,
    }
    connectSocket((receivedStarCount) => {
      // console.log(`Stars received: ${receivedStarCount}`)
      this.setStarCountState(receivedStarCount)
    })
  }

  setStarCountState = (count) => {
    this.setState({ value: count })
  }

  onChange = (newRating) => {
    sendStarRating(newRating)
  }

  render() {
    return (<ReactStars {...this.state} value={this.state.value} className="stars"/>)
  }
}