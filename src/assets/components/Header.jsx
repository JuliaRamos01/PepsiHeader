import React from "react";
import Logo from "../images/logo.png";
import * as S from "../components/style";

export default function HeaderComponent () {
    return (
        <S.Header>
            <div>
                <img src={Logo} alt="Logo da Pepsi"/>
            </div>
            <S.NavHeader>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>What's New</li>
                    <li>Newsletter</li>
                    <li>Contact</li>
                </ul>
            </S.NavHeader>
        </S.Header>
    );
};