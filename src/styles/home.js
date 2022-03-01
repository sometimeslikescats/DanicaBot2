import styled from 'styled-components'


export const Header = styled.header`

@import url('https://fonts.googleapis.com/css?family=Schoolbell&display=swap');

    font-family: 'Schoolbell', sans serif;
	grid-column: 1 / -2;
	grid-row: header;
	padding: 2rem;
	box-shadow: -0.035rem 0.03rem 0.3rem rgba(0, 0, 0, 0.2);
	z-index: 1;
    width: fit-content;
	background-color: #ebfbe6;
    font-size: 40px;
    font-weight: bold;
    transform: rotate(-10deg);
    line-height: 1.2;

`

export const Main = styled.main`
width:100%;
height: 100vh;
color: #444;
line-height: 20px;
border: 1px solid #d2d2d2;
background: #fff;
background: -webkit-gradient(linear, 0 0, 0 100%, from(#d9eaf3), color-stop(4%, #fff)) 0 4px;
background: -webkit-linear-gradient(top, #d9eaf3 0%, #fff 8%) 0 4px;
background: -moz-linear-gradient(top, #d9eaf3 0%, #fff 8%) 0 4px;
background: -ms-linear-gradient(top, #d9eaf3 0%, #fff 8%) 0 4px;
background: -o-linear-gradient(top, #d9eaf3 0%, #fff 8%) 0 4px;
background: linear-gradient(top, #d9eaf3 0%, #fff 8%) 0 4px;
-webkit-background-size: 100% 20px;
-moz-background-size: 100% 20px;
-ms-background-size: 100% 20px;
-o-background-size: 100% 20px;
background-size: 100% 20px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
-moz-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
box-shadow: 0 1px 2px rgba(0,0,0,0.07);

:before {
    content: '';
    position: absolute;
    width: 4px;
    top: 0;
    left: 64px;
    bottom: 0;
    border: 1px solid;
    border-color: transparent #efe4e4;
    z-index: 0;
}
`