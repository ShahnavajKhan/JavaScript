// src/HomePage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Header = styled.header`
  width: 100%;
  background-color: #4a90e2;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  margin: 15px 0;
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Banner = styled.div`
    backgroundImage: url( Assets/headphone.jpg),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover', // Optional
        height: '100vh', // Set height as needed
        width: '100%', // Set width as needed
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #357ab7;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
`;

const FeaturedSection = styled.section`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin: 40px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const HomePage = () => {
  const products = [
    {
      id: 1,
      title: 'Washing Machine',
      price: '$360.00',
      image: "Assets/product 1.webp"
    },
    {
      id: 2,
      title: 'Air Conditioners',
      price: '$20.00',
      image: "Assets/product 2.jpeg"
    },
    {
      id: 3,
      title: 'Leptops',
      price: '$30.00',
      image: "Assets/product 3.webp"
    },
    {
      id: 4,
      title: 'Product 4',
      price: '$40.00',
      image: "Assets/product 4.webp"
    },
    {
      id: 5,
      title: 'Product 5',
      price: '$50.00',
      image: "Assets/product 5.webp"
    },
    {
      id: 6,
      title: 'Product 6',
      price: '$60.00',
      image: "Assets/product 6.png"
    },
    {
      id: 7,
      title: 'Product 7',
      price: '$90.00',
      image: "Assets/product 7.webp"
    },
    {
      id: 8,
      title: 'Product 8',
      price: '$200.00',
      image: "Assets/product 8.webp"
    },
    {
      id: 9,
      title: 'Product 9',
      price: '$90.00',
      image: "Assets/product 9.webp"
    },
    {
      id: 10,
      title: 'Product 10',
      price: '$90.00',
      image: "Assets/product 10.webp"
    },
  ];

  return (
    <Container>
      <Header>
        <Title>My Shopping Site</Title>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>
      <Banner>
        Welcome to Our Store!
      </Banner>
      <FilterContainer>
        <FilterButton>All</FilterButton>
        <FilterButton>Electronics</FilterButton>
        <FilterButton>Fashion</FilterButton>
        <FilterButton>Home</FilterButton>
      </FilterContainer>
      <FeaturedSection>
        <h2>Featured Products</h2>
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </FeaturedSection>
      <Footer>
        &copy; {new Date().getFullYear()} My Shopping Site. All rights reserved.
      </Footer>
    </Container>
  );
};

export default HomePage;
