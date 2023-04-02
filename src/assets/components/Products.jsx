import React, {useState} from "react";
import * as S from "../components/style";
import ProductBlue from "../images/pepsi001";
import ProductWhite from "../images/pepsi002";
import ProductBlack from "../images/pepsi003";

export default function Products (){
    const [image, setImage] = useState();
    const [background, Setbackground] = useState();

    return(
        <ProductsSection>
            <div>
            <img onClick={() => {setImagem(ProductBlue); setBackground();}} src={ProductBlue} alt="Pepsi Blue"/>
            </div>
        </ProductsSection>

        <ProductIllustration>
            
        </ProductIllustration>
    );
};