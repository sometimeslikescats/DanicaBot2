import React from "react"
import Character from "./character"
import Chat from "./chat"
class Conversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //Object where different message streams can be passed in
      messages: [
        "Talk to me!",
        "I'm a Web Developer based in Norwich",
        "Namely, React, Angular, Node.js, Next.js and Typescript! I'm always trying to learn something new!",
        "I enjoy running, cooking, baking, and making little bots like me!"
      ],
      responses: [
        "Hi Danica. What do you do?",
        "Cool. What do you know?",
        "What do you do for fun?",
        "Nerd. What can this bot do then?"
      ],
      isTyping: true,
      counter: 0,
      isFinished: false,
      mouth: "Happy",
      fly: false,
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.windy = this.windy.bind(this)
    this.sad = this.sad.bind(this)
    this.bubble = this.bubble.bind(this)
    this.reset = this.reset.bind(this)
  }

  clickHandler() {
    const counter = this.state.counter + 1
    if (this.state.messages.length <= counter) this.setState({ isFinished: true, isTyping: false })
    this.setState({ counter })
  }

  windy() {
    this.setState({ fly: true, mouth: "Shocked" })
    setTimeout(() => {
      this.setState({ fly: false, mouth: "Happy" })
    }, 6000)
  }

  sad() {
    this.setState({ mouth: "Sad" })
    setTimeout(() => {
      this.setState({ mouth: "Happy" })
    }, 6000)
  }

  bubble() {
    this.setState({ mouth: "Bubble" })
    setTimeout(() => {
      this.setState({ mouth: "Happy" })
    }, 6000)
  }

  reset(){
    this.setState({counter: 0, isFinished: false})
  }
  render() {
    return (<div style={{ position: "relative" }}>
      <Character isTyping={this.state.isTyping} mouth={this.state.mouth} fly={this.state.fly} />
      <Chat message={this.state.messages[this.state.counter]}
        response={this.state.responses[this.state.counter]}
        click={this.clickHandler}
        // Clears chat box to show buttons
        gone={this.state.isFinished}
        windy={this.windy}
        sad={this.sad}
        bubble={this.bubble}
        restart={this.reset}
        />

    </div>)
  }
}

export default Conversation
