import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from './Products';
import styled from 'styled-components';

const ProductItem = () => {
  const [item, setItem] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [id]);

  return (
    <Container>
      <Title>구매 아이템</Title>
      <Display>구매 가능 여부: Y</Display>
      <Display>상품명: {item?.title}</Display>
      <Display>가격: {item?.price}</Display>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Display = styled.h2`
  font-size: 2.5rem;
`;

export default ProductItem;
