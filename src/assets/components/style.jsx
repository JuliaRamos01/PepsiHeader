import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`;

export const Container = styled.section`
background-color: #0261bf;
height: 100vh;
`;

export const Header = styled.header`
display: flex;
justify-content: space-between;
width: 100%;
  /* border: solid; */
padding-left: 3vw;
`;

export const NavHeader = styled.nav`
display: flex;
align-items: center;
width: 45vw;
ul {
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    list-style: none;
}
li {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
}
`;

export const MainBox = styled.main`
border: solid;
height: 83.6vh;
`;

export const TextBox = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: solid red;
width: 40%;
height: 83vh;
color: #ffffff;
font-family: "Roboto", sans-serif;
h1 {
    font-size: 4em;
}
p {
    font-size: 1.6em;
}
button {
    width: 15vw;
    height: 6vh;
    border-radius: 20px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    color: #000000;
    font-size: 1.05rem;
}
`;