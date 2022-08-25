import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import ListWebsites from '../Products/website/listWebsite';
import { LayoutContainer } from '../../Layout/layoutContainer';

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        py-16
        bg-background
    `}
`

const TemplateContainer = styled.div`
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

const TemplateSection = () => (
    <SectionContainer>
        <LayoutContainer>
            <TemplateContainer>
                <Heading>Website templates by industry</Heading>
                <ListWebsites></ListWebsites>
            </TemplateContainer>
        </LayoutContainer>
    </SectionContainer>
)

export default TemplateSection;