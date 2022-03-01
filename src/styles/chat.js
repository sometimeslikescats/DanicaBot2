import styled from "styled-components"
import { device } from "./responsive"

export const ButtonWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
@media ${device.mobileS} { 
flex-wrap: wrap;
  }

`

export const Button = styled.button`
height: 40px;
z-index: 2;
display: flex;
align-content: center;
background: #a8d4dd;
border:#000 1px solid;
border-radius: 16px;
margin: 8px;
color: #000;
padding: 12px 16px; 
font-size: 16px;
cursor: pointer;
transition: all 0.2s ease-in-out;
@media ${device.mobileS} { 
height: 34px;
font-size: 10px;
margin: 2px;
}

:hover{
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
}

`

export const SpeechWrapper = styled.div`
width:200px;
height:200px;
position: absolute;
left: 46%;
bottom: 3%;
@media ${device.mobileS} { 
  width: 100px;
  height: 100px;
  left: 56%;
}
`
export const Speech = styled.div`
position: relative;
width: 111%;
min-height: 75%;
background: #f4d9ef;
border-radius: 10px;
left: 10%;
font-family: 'Overpass Mono', monospace;
z-index:2;
font-size:0.7em;
padding:1.5em;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);

&:before{
  content: '';
  position: absolute;
  border: #f4d9ef solid 40px;
  display: block;
  width: 0;
  z-index: -1;
  left: -1%;
  top: 22%;
  transform: rotate(45deg);
  @media ${device.mobileS} { 
display: none;
  }
}
`

export const SpeechContent = styled.span`
overflow: hidden; 
border-right: .15em solid orange; 
letter-spacing: .15em;
animation: 
  blink-caret .75s step-end infinite;

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
    }

`

export const Reply = styled.div`
position: relative;
width:110%;
min-height:20%;
background: #a8d4dd;
border:#000 1px solid;
padding: 1em;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 4px 2px;
cursor: pointer;
border-radius: 16px;
left: 9%;
font-size:0.7em;
font-family: 'Overpass Mono', monospace;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
transition: all 0.2s ease-in-out;

:hover{
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
}
`
