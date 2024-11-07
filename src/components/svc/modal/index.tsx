import React, { useEffect } from "react";


interface ProductModalProps {
  idProduct: number;
}

export const ProductModal: React.FC<ProductModalProps> = ({ idProduct }) => {
  
  useEffect(() => {
    console.log('teste')
  }, []);

  return (
    <h1>teste modal {idProduct}</h1>
  )
}