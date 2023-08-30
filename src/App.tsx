import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/CartContext';
import MainRoutes from './routes/routes';
import GlobalStyle from './styles/globalStyle';
import themes from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.themeLight}>
      <GlobalStyle />
      <Router>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
