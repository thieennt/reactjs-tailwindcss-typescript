import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import ImgProduct from '../../../assets/images/Website/Rectangle 1.svg'
import { LayoutContainer } from '../../Layout/layoutContainer';

const TopSectionContainer = styled.div`
    min-height: 400px;
    ${tw`
        w-full
        flex
        justify-center
        items-center
        bg-background
        pt-12
        pb-12
    `}
`

const MainContainer = styled.div`
    ${tw`
        w-10/12
        flex
        justify-center
    `}
`

const LeftContainer = styled.div`
    ${tw`
        hidden
        flex-col

        md:w-1/3
        md:flex
        md:flex-col

        lg:w-1/3
        lg:flex
        lg:flex-col
    `}

    img { 
        width: 80%;
        height: auto;
    }
`

const RightContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        justify-center
        content-center

        md:w-8/12
        md:flex
        md:flex-col
        md:relative
        md:items-center

        lg:w-8/12
        lg:flex
        lg:flex-col
        lg:relative
        lg:items-center
    `}
`

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-xl
        w-full
        flex
        justify-center
        items-center
        text-center

        md:text-2xl
        md:w-3/4
        lg:text-2xl
        lg:w-3/5
    `}
`

const Description = styled.p`
    ${tw`
        text-sm
        pt-8
        leading-loose
        text-justify
        
        lg:text-base
        lg:leading-loose
    `}
`


const TopSection = () => {
    return (
        <TopSectionContainer>
            <LayoutContainer>
                <MainContainer>
                    <LeftContainer>
                        <img src={ImgProduct} alt="" />
                    </LeftContainer>
                    <RightContainer>
                        <Slogan>
                            Design outstanding and professional interior website
                        </Slogan>
                        <Description>
                            Website selling furniture is like the face of your business. Especially in the field of furniture, there are many competitors. Therefore, having a professional furniture selling website is a tool that can help you increase brand awareness, help you easily manage and reach customers better. Haravan is proud to provide a professional website for selling furniture, helping your website bring interesting experiences to customers.
                        </Description>
                    </RightContainer>
                </MainContainer>
            </LayoutContainer>
        </TopSectionContainer>
    )
}

export default TopSection;