import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import { HeaderFooterLayoutContainer } from './styles';

const HeaderFooterLayout: React.FC = () => {
  return (
    <HeaderFooterLayoutContainer>
      <Navigation />
      <Outlet />
    </HeaderFooterLayoutContainer>
  );
};

export default HeaderFooterLayout;
