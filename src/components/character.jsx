import React from "react"
import { PersonWrapper, TypingIndicator, Typing, PersonBack, Person, Earrings, Beret, Hair, Fringe, Body, Neck, Head, Eyelash, LeftEye, RightEye, LeftGlint, RightGlint, Features, HappyMouth, HappyTongue, Mole, Nose, Cheek, SadMouth, BubbleMouth, ShockedMouth } from "../styles/character"

class Character extends React.Component {
    render() {
        const typing = this.props.isTyping ?
            (<TypingIndicator>
                <Typing></Typing>
                <Typing></Typing>
                <Typing></Typing>
            </TypingIndicator>) : null
        let mouth =
            (<HappyMouth>
                <HappyTongue></HappyTongue>
            </HappyMouth>)

        switch (this.props.mouth) {
            case "Sad":
                mouth = <SadMouth></SadMouth>
                break
            case "Bubble":
                mouth = <BubbleMouth></BubbleMouth>
                break
            case "Happy":
                mouth = <HappyMouth>
                    <HappyTongue></HappyTongue>
                </HappyMouth>
                break
            case "Shocked":
                mouth = <ShockedMouth></ShockedMouth>
                break

            default: 
                mouth = <HappyMouth>
                <HappyTongue></HappyTongue>
            </HappyMouth>
        }

        return (
            <PersonWrapper>
                {typing}
                <PersonBack>
                    <Person>
                        <Earrings></Earrings>
                        <Beret fly={this.props.fly}></Beret>
                        <Hair>
                            <Fringe></Fringe>
                        </Hair>
                        <Body></Body>
                        <Neck></Neck>
                        <Head>
                            <Features>
                                {mouth}
                                <Mole></Mole>
                                <LeftEye>
                                    <LeftGlint></LeftGlint>
                                    <Eyelash></Eyelash>
                                </LeftEye>
                                <RightEye>
                                    <RightGlint></RightGlint>
                                    <Eyelash></Eyelash>
                                </RightEye>
                                <Nose></Nose>
                                <Cheek></Cheek>
                            </Features>
                        </Head>
                    </Person>
                </PersonBack>
            </PersonWrapper>
        )
    }
}


export default Character
