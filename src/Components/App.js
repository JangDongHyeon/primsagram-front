import React, { Component } from 'react'
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";
import { useQuery } from 'react-apollo-hooks';
import { HashRouter as Router } from "react-router-dom";

//클라이언트 적어야 백엔드로 가지않음.
const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {

  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);




  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            {isLoggedIn && <Header />}
            <Wrapper>

              <Routes isLoggedIn={isLoggedIn} />
              <Footer />
            </Wrapper>
          </>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>

    </ThemeProvider>
  );
}

