import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const HeroSection = () => {
  return (
  <Wrapper>
<div className='container grid grid-two-column'>
    <div className="section-hero-data">
        <p className='hero-top-data'>This is me</p>
        <h1 className='hero-heading'>Martin</h1>
        <p className='hero-para'>Hello i like to talk alot and alot of text</p>
    </div>
    <Button className="btn hireme-btn">
        <NavLink to="/contact">HIRE ME</NavLink>

    </Button>
    <div className="section-hero-image"></div>
</div>
  </Wrapper>
  )
}

const Wrapper = styled.section``

export default HeroSection