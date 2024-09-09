import { useEffect, useRef, useState } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const Products = () => {
  const [itemList, setItemList] = useState<Product[]>([]);
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((payload) => setItemList(payload))
      .then(() => {
        const value = localStorage.getItem('product-id');

        if (value) {
          scroll(Number(value));
        }
      });
  }, []);

  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    localStorage.setItem('product-id', JSON.stringify(id));
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const preventScroll = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  if (itemList.length === 0) {
    return <div>Loading...</div>;
  }

  /**
   * 요소의 개수 == 배열과 동일
   */
  return (
    <Parallax
      ref={parallax}
      pages={itemList.length}
      horizontal
      style={{
        background: `linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)`,
      }}
    >
      {itemList.map((item, index) => {
        const nextIndex =
          index === itemList.length - 1 ? 0 : (index + 1) % itemList.length;
        const prevIndex =
          index === 0
            ? itemList.length - 1 // 현재 인덱스가 0일 때, 마지막 인덱스를 반환
            : (index - 1 + itemList.length) % itemList.length;

        return (
          <Page
            onClick={clickHandler}
            key={index}
            data={item}
            offset={index}
            onNext={() => {
              scroll(nextIndex);
            }}
            onPrev={() => {
              scroll(prevIndex);
            }}
          />
        );
      })}
    </Parallax>
  );
};

interface PageProps {
  offset: number;
  data: Product;
  onNext: () => void;
  onPrev: () => void;
  onClick: (id: number) => void;
}

const Page = ({ offset, onNext, onPrev, data, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.3}>
      <DescriptionText1>{offset}</DescriptionText1>
    </ParallaxLayer>

    {/* 이미지 */}
    <ParallaxLayer offset={offset} speed={0.9}>
      <ImageContainer>
        <Image src={data.image} />
      </ImageContainer>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <DescriptionContainer>
        <DescriptionText1>{data.title}</DescriptionText1>
        <DescriptionText2>{data.description}</DescriptionText2>
      </DescriptionContainer>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <PriceContainer>
        <PrevButton onClick={onPrev}>PREV</PrevButton>
        <PriceText onClick={() => onClick(data.id)}>{data.price}$</PriceText>
        <NextButton onClick={onNext}>NEXT</NextButton>
      </PriceContainer>
    </ParallaxLayer>
  </>
);

const PrevNextButton = styled.button`
  width: 50px;
  height: 100px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const PrevButton = styled(PrevNextButton)`
  border-radius: 0 100px 100px 0;
`;

const NextButton = styled(PrevNextButton)`
  border-radius: 100px 0 0 100px;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 45%;
  border-radius: 16px;
  background-color: #ffffff;
  overflow: hidden;
  margin: 50px;
  border: 2px solid;
  box-shadow: 10px 11px 29px 0px rgba(0, 0, 0, 0.75);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DescriptionContainer = styled.div`
  position: relative;
  top: 53%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 35px;
  padding: 0 55px;
`;

const DescriptionText1 = styled.h1`
  text-align: left;
  width: 100%;
  font-size: 3rem;
  text-transform: uppercase;
`;

const DescriptionText2 = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 1.5rem;
`;

const PriceContainer = styled.div`
  position: relative;
  top: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceText = styled.h2`
  width: 100%;
  text-align: right;
  font-weight: bold;
  font-size: 3rem;
  margin-right: 30px;
  cursor: pointer;
`;

export default Products;
