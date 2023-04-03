import React from "react";
import * as S from "./assets/components/style";
import HeaderComponent from "./assets/components/Header";
import Main from "./assets/components/Main";
import Products from "./assets/components/Products";


export default function App(){
  return(
    <S.Container>
      <S.GlobalStyle />
      <HeaderComponent/>
      <Main/>
      <Products/>
    </S.Container>
  )
}