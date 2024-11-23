
import { Box, Modal, TextField } from '@mui/material';
import { ContentContainer, HeaderContainer, MainContainer, ProductCard, ProductsContainer } from './styles';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import axios from 'axios';
import { ProductModal } from './modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1d1d1d',
  border: '4px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export const SVC = () => {

  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const baseUrl = 'http://localhost:3000';


  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(baseUrl);
      setProducts(response.data);
      setAllProducts(response.data);
    }

    fetchData();
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearch(event.target.value)
    const newSearch = event.target.value;

    if (newSearch.length !== 0)
      setProducts(
        allProducts.filter(p => String(p.idProduct).includes(newSearch) || p.name.includes(newSearch) || p.caracteristicas.includes(newSearch))
      );
    else
      setProducts(allProducts);
  }

  const handleOpenModal = () => {

    setOpenModal(true);
  }
   
  return (
    <MainContainer>
      <HeaderContainer className="headerContainer">
        <span>S.V.C</span>
      </HeaderContainer>

      <ContentContainer className="contentContainer">
        <div>
          <TextField 
            label="Buscar Por" 
            color="primary" 
            focused 
            sx={{ input: { color: 'rgba(255, 255, 255, 0.87)' } }} 
            value={search}
            onChange={handleSearch}
          />
        </div>

        <ProductsContainer>
          {
            products.map((product, index) => (
              <ProductCard key={index} onClick={handleOpenModal}>
                <div>
                  <span>Id:</span>
                  <span>{product.idProduct}</span>
                </div>
                <div>
                  <span>Nome:</span>
                  <span>{product.name}</span>
                </div>
                <div>
                  <span>Características:</span>
                  <span>{product.caracteristicas}</span>
                </div>
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <ProductModal product={product} />
                  </Box>
                </Modal>
              </ProductCard>
            ))
          }
        </ProductsContainer>
      </ContentContainer>
    </MainContainer>
  )
}