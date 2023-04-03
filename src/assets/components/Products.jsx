import React, {useState} from "react";
import * as S from "../components/style";
import ProductBlue from "../images/pepsi001.png";
import ProductWhite from "../images/pepsi002.png";
import ProductBlack from "../images/pepsi003.png";

export default function Products () {
    const [Image, setImage] = useState(ProductBlue)
    const [Background, setBackground] = useState("#0261bf")

    return(
        <S.ProductsSection>
            {/* <S.Background backgroundColor={Background}/> */}
            <div>
            <img onClick={() => {setImage(ProductBlue); setBackground()}} src={ProductBlue} alt="Pepsi Blue"/>
            <img onClick={() => {setImage(ProductWhite); setBackground("#E60C2D")}} src={ProductWhite} alt="Pepsi White"/>
            <img onClick={() => {setImage(ProductBlack); setBackground("#1F1E1F")}} src={ProductBlack} alt="Pepsi Black"/>
            </div>
            <div>
            <img src={Image} alt="Pepsi Image" />
            </div>
        </S.ProductsSection>
    );
};