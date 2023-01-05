import React, { useEffect, useRef } from 'react'
import {
    Container,
} from 'react-bootstrap';
import styled from 'styled-components';
import { NavBar } from './NavBar';

const StyledHeader = styled.header`
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;

  &.header-scrolled {
    background: rgba(#000, .9);
    padding: 12px 0;
  }
`;

const Logo = styled.h1`
  font-size: 28px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    letter-spacing: 1px;

    a {
      color: #fff;
    }

    img {
      max-height: 40px;
    }
`;

export const Header = () => {
  const headerRef = useRef(null);
  useEffect(()=> {
     if (headerRef.current) {
       const headerScrolled = () => {
         if (window.scrollY > 100) {
          headerRef.current.classList.add('header-scrolled')
         } else {
          headerRef.current.classList.remove('header-scrolled')
         }
       }
       window.addEventListener('load', headerScrolled)
       document.addEventListener('scroll', headerScrolled);

       return(()=>{
         window.removeEventListener('load', headerScrolled)
         document.removeEventListener('scroll', headerScrolled);
       })
     }
  });

  return (<StyledHeader ref={headerRef} className="fixed-top">
    <Container className='d-flex align-items-center justify-content-between'>
      <Logo className="logo"><a href='index.html'>Dave Matney</a></Logo>
      <NavBar />
    </Container>
  </StyledHeader>);
}
