import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import ListHomes from '../Products/home/listHome';
import { LayoutContainer } from '../../Layout/layoutContainer';

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        pt-8
        bg-background
    `}
`

const InterfaceContainer = styled.div`
    ${tw`
        w-full
    `}
`
const Heading = styled.h2`
    ${tw`
        font-bold
        text-[20px]
        pb-6
        text-center

        lg:text-left
    `}
`

const InterfaceSection = () => {
    return (
        <SectionContainer>
            <LayoutContainer>
                <InterfaceContainer>
                    <Heading>Interface</Heading>
                    <ListHomes></ListHomes>
                </InterfaceContainer>
            </LayoutContainer>
        </SectionContainer>
    )
}

export default InterfaceSection;