import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import SearchSection from './components/Container/Search';
import TopSection from './components/Container/Section/topSection';
import InterfaceSection from './components/Container/Section/interfaceSection';
import TemplateSection from './components/Container/Section/templateSection';
import FormSection from './components/Form';
import FooterSection from './components/Footer/footerSection';

const AppContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
  `}
`

function App() {
  return (
    <AppContainer>
      <Navbar></Navbar>
      <SearchSection></SearchSection>
      <TopSection></TopSection>
      <InterfaceSection></InterfaceSection>
      <TemplateSection></TemplateSection>
      <FormSection></FormSection>
      <FooterSection></FooterSection>
    </AppContainer>
  );
}

export default App;
