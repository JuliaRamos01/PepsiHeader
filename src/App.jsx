import React from "react";
import * as S from "./assets/components/style";
import HeaderComponent from "./assets/components/Header";
import Main from "./assets/components/Main";


export default function App(){
  return(
    <S.Container>
      <S.GlobalStyle />
      <HeaderComponent/>
      <Main/>
    </S.Container>
  )
}