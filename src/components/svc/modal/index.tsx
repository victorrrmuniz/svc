import React, { useEffect } from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { ContentContainer, MainContainer, TitleContainer } from "./styles";


interface ProductModalProps {
  product: IProduct;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
  
  useEffect(() => {
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        {product.name}
      </TitleContainer>
      <ContentContainer>
        <div>
          <span>Id:</span>
          <span>{product.idProduct}</span>
        </div>
        <div>
          <span>Características:</span>
          <span>{product.caracteristicas}</span>
        </div>
      </ContentContainer>
    </MainContainer>
  )
}