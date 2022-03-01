import styled, {keyframes} from "styled-components"
import { device } from "./responsive"

export const PersonWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  @media ${device.mobileS} { 
    width: 160px;
    height: 160px;
  }
`
export const bulge = keyframes`
    50% {
      transform: scale(1.05);
    }
`

export const TypingIndicator = styled.div`
  width: 30%;
  height: 16%;
  position: absolute;
  background-color: #E6E7ED;
  z-index: 4;
  border-radius: 500px;
  left:79%;
  top: -16%;
  left: 79%;
  animation: ${bulge} 2s infinite ease-out;

  &:before{
    width: 11%;
    height: 20%;
    content: "";
    display: block;
    background-color: #E6E7ED;
    top: 98%;
    position: absolute;
    border-radius: 50%;
  }

  &:after{
    width: 11%;
    height: 20%;
    content: "";
    display: block;
    background-color: #E6E7ED;
    top: 121%;
    position: absolute;
    border-radius: 50%;
    left:-8%;
  }
`

export const blink = keyframes`
  50% {
    opacity: 1;
  }
`

export const Typing = styled.span`
  height: 30%;
  width: 15%;
  float: left;
  margin: 0 1px;
  background-color: #9E9EA1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
  position: absolute;
  animation: ${blink} 1s infinite;

  &:nth-child(1){
    top: 36%;
    left: 17%;
    animation-delay: 0.33s
  }

  &:nth-child(2){
    top: 36%;
    left: 40%;
    animation-delay: 0.66s
  }

  &:nth-child(3){
    top: 36%;
    left: 63%;
    animation-delay: 0.99s
  }
`
export const PersonBack = styled.div`
    width:100%;
    height:100%;
    background-color: aliceblue;
    border-radius: 50%;
    border: 4px solid black;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
`

export const breathing = keyframes`
    0%,100%{
      top:17%;
    }

    50%{
      top:15%;
    }
`

export const Person = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 18%;
    animation: ${breathing} 1.5s ease-out infinite;
`
export const Earrings = styled.div`
    width: 4%;
    height: 4%;
    position: absolute;
    background-color: #bc8505;
    border-radius: 50%;
    left: 71%;
    z-index: 6;
    top: 45%
`

export const flyaway = keyframes`
    0% {
      transform: rotate(-15deg);
      left: 15%;
    }
    100% {
      transform: rotate(110deg);
      left: 86%;
    }
`

export const Beret = styled.div`
    width: 61%;
    height: 26%;
    background-color: rgb(76, 66, 53);
    position: absolute;
    z-index: 5;
    border-radius: 45%;
    transform: rotate(-15deg);
    left: 15%;
    animation-name: ${props=>props.fly? flyaway:"none"};
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &:before{
      content: "";
      display: block;
      background-color: rgb(102, 92, 79);
      position: absolute;
      width: 4%;
      height: 30%;
      z-index: 4;
      left: 43%;
      top: -10%;
      border-radius: 5% 40% 40% 40%;
    }
`

export const Hair = styled.div`
  width:62%;
  height:73%;
  background-color: black;
  position: absolute;
  border-radius: 50% 50% 25% 25%;
  left: 19%;
`

export const Fringe = styled.div`
  width: 72%;
  height: 40%;
  position: absolute;
  border-radius: 100% 0 100% 100%;
  background-color: black;
  z-index: 3;
  transform: rotate(20deg);
  left: 20%;
  bottom: 60%;

  &:before {
    content: "";
    display: block;
    background-color: black;
    width: 30%;
    height: 130%;
    border-radius: 100% 100% 100% 0%;
    position: absolute;
    top: 55%;
    right: 80%;
    transform: rotate(5deg);
  }

  &:after{
    content: "";
    display: block;
    background-color: black;
    position: absolute;
    width: 30%;
    height: 130%;
    left: 80%;
    transform: rotate(-40deg);
    border-radius: 100% 100% 100% 100%;
  }
`

export const Body = styled.div`
    width: 60%;
    height: 30%;
    background-color: #ba5005;
    top: 62%;
    position: absolute;
    left: 19%;
    border-radius: 45% 45% 0% 0%;
`

export const Neck = styled.div`
    width: 26%;
    height: 14%;
    background-color: rgb(117, 58, 16);
    position: absolute;
    top: 60%;
    left: 36%;
    border-radius: 0% 0% 49% 49%;
`

export const Head = styled.div`
    width: 50%;
    height: 61%;
    background-color: rgb(139,69,19);
    border-radius: 46%;
    position: absolute;
    left: 23.5%;
    top: 5%;
`
export const Eyelash = styled.div`
position: absolute;
width:40%;
height:10%;
background-color: black;
transform:rotate(20deg);
top:25%;
right:92%;

&:before{
  content: "";
  display: block;
  position: absolute;
  width:100%;
  height:100%;
  background-color: black;
  transform:rotate(45deg);
  top:-250%;
}
`
export const blinking = keyframes`
    0%,10%,20%,100%{
      height:9%;
    }

    8.5%,18.5%{
      height:1%;
      box-shadow: 1px 1px 1px black;;
    }
`

export const LeftEye = styled.div`
top:38%;
display: block;
position: absolute;
left:25%;
width:10%;
border-radius: 50%;
background-color: black;
position: absolute;
height:9%;
animation: ${blinking} ease-out 7.4s infinite;
`
export const RightEye = styled(LeftEye)`
right:25%;
transform: scaleX(-1);
left:unset;
animation: ${blinking} ease-out 7.4s infinite;
`

export const LeftGlint = styled.div`
width: 18%;
height: 18%;
position: absolute;
background-color: white;
border-radius: 50%;
left: 14%;
z-index: 6;
top: 19%;

&:before{
  content: "";
  display: block;
  width: 60%;
  height: 60%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  z-index: 6;
  top: 275%;
  right: -218%;
}
`

export const RightGlint = styled(LeftGlint)`
  left: 63%;
  top: 16%;

  &:before{
  right: 239%;
  }
`

export const Features = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:14%;
`

export const HappyMouth = styled.div`
    z-index: 20;
    width: 30px;
    height: 15px;
    border-radius: 0 0 100px 100px;
    background: black;
    overflow: hidden;
    position: absolute;
    left: 33.5%;
    top: 58%;
    border: 3px #4f1330 solid;
`

export const HappyTongue = styled.div`
    width:80%;
    height:60%;
    background-color: rgb(193, 87, 120);
    position: absolute;
    top: 40%;
    left: 10%;
    border-radius: 50%;
`

export const Mole = styled.div`
    width: 1.5%;
    height: 1.5%;
    position: absolute;
    background-color: black;
    border-radius: 50%;
    left: 82%;
    z-index: 6;
    top: 50%;
`

export const Nose = styled.div`
    width:7%;
    height:12%;
    background-color: rgba(81, 38, 11, 0.5);
    border-radius: 40%;
    position: absolute;
    top: 40%;
    left: 47.5%;
`

export const Cheek = styled.div`
width:100%;
height:100%;
position: absolute;

&:before{
  content: "";
  display: block;
  width: 15%;
  height: 9%;
  background-color: rgba(142, 54, 77, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 53%;
  left: 4.5%;
}

&:after{
  content: "";
  display: block;
  position: absolute;
  width: 15%;
  height: 9%;
  background-color: rgba(142, 54, 77, 0.5);
  border-radius: 50%;
  top: 53%;
  left: 82%;
}
`
export const SadMouth = styled.div`
width: 20px;
height: 9px;
background-color: black;
position: absolute;
z-index: 20;
left: 38%;
top: 58%;
background-color: transparent;
border-top-left-radius: 110px;
border-top-right-radius: 110px;
border: 2px solid black;
border-bottom-color: black;
border-bottom-style: solid;
border-bottom-width: 2px;
border-bottom: 0;
`
export const ShockedMouth = styled.div`
z-index: 20;
width: 20%;
height: 17%;
border-radius: 100%;
background: black;
overflow: hidden;
position: absolute;
left: 40.5%;
top: 58%;
`

export const bubble = keyframes`
    0%,100% {
      width: 8%;
      height: 7%;
      left: 44.5%;
    }

    50% {
    width: 67%;
    height: 54%;
    left: 16.5%;
    border: 1px solid transparent;
    top: 38%;
    }
`

export const BubbleMouth = styled.div`
z-index: 20;
width: 8%;
height: 7%;
border-radius: 100%;
background: pink;
overflow: hidden;
position: absolute;
left: 44.5%;
top: 58%;
border: 3px solid #4f1330;
animation: ${bubble} ease-in 5s 1;
`
