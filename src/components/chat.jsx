import React from "react"
import { SpeechWrapper, Speech, SpeechContent, Reply, ButtonWrapper, Button } from "../styles/chat"
import { RiWindyLine } from "react-icons/ri"
import { FaCandyCane } from "react-icons/fa"
import { CgSmileSad } from "react-icons/cg"

const Buttons = function (props) {
    return (<ButtonWrapper>
        <Button><RiWindyLine onClick={props.windy} /></Button>
        <Button><FaCandyCane onClick={props.bubble} /></Button>
        <Button><CgSmileSad onClick={props.sad} /></Button>
        <Reply onClick={props.reset}>Reset</Reply>
    </ButtonWrapper>)
}
class Chat extends React.Component {

    render() {
        const content = this.props.gone ?
            (<Buttons windy={this.props.windy} bubble={this.props.bubble} sad={this.props.sad} reset={this.props.restart}></Buttons>) :
            (<React.Fragment><Speech><SpeechContent>{this.props.message}</SpeechContent></Speech>
                <Reply onClick={this.props.click}> {this.props.response}</Reply></React.Fragment>
            )
        return (
            <SpeechWrapper>
                {content}
            </SpeechWrapper>
        )
    }
}

export default Chat
