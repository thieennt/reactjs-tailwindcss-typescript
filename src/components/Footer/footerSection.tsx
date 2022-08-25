import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import FooterTopSection from './footerTopSection';
import FooterBottomSection from './footerBottomSection';
import { LayoutContainer } from '../Layout/layoutContainer';

const FooterContainer = styled.div`
    ${tw`
        flex
        flex-col
        bg-background
        w-full
    `}
`

const Footer = styled.div`
    ${tw`
        w-full
    `}
`

const FooterSection = () => (
    <FooterContainer>
        <LayoutContainer>
            <Footer>
                <FooterTopSection></FooterTopSection>
                <FooterBottomSection></FooterBottomSection>
            </Footer>
        </LayoutContainer >
    </FooterContainer >
)

export default FooterSection;