import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import ImgSearch from '../../../assets/images/Website/banner.svg';
import { FaSearch } from "react-icons/fa";
import { SCREENS } from '../../responsive';
import { useMediaQuery } from 'react-responsive';
import TopSection from '../Section/topSection';
import Button from '../../Button';
import { LayoutContainer } from '../../Layout/layoutContainer';


const SearchContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        
        lg:w-full
        lg:h-full
        lg:mt-0

        md:mt-0
    `}

    img { 
        width: 100%;
        min-height: 100vh;
        object-fit: cover;
    }

    @media (min-width: ${SCREENS.md}) {
        img { 
            max-width: 100%;
            min-height: 45vh;
            object-fit: cover;
        }
    }

`

const SearchBox = styled.div`
    ${tw`
        w-full
        flex
        justify-center
        items-center
    `}

    input { 
        background-color: transparent;
        font-size: 14px;
        color: #1B1B1B;
    }

    input:focus {
        outline:none;
    }
`

const SearchInput = styled.div`
    ${tw`
        w-10/12
        flex
        justify-between
        items-center
        rounded-full
        absolute
        top-36
        bg-background
        px-5
        py-2.5

        md:w-5/12
        lg:w-5/12
    `}
`

const Icon = styled.span`
    ${tw`
        text-xl
        text-gray-300
        font-light
    `}
`

const IntroSection = styled.div`
    ${tw`
        absolute
        top-1/3
        w-8/12
        flex
        flex-col

        md:top-[22%]
    `}
`

const Slogan = styled.h2`
    ${tw`
        font-bold
        text-white
        text-[18px]
        text-center
    `}
`

const Description = styled.p`
    ${tw`
        text-gray-300
        text-justify
        pt-10
        md:pt-4
    `}
`

const ButtonContainer = styled.div`
    ${tw`
        flex
        ease-in-out
        justify-center
        pt-7
    `}
`

const SearchSection = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.md })
    if (isMobile) {
        return (
            <SearchContainer>
                <img src={ImgSearch} alt="Search" />
                <SearchBox>
                    <SearchInput>
                        <input type="text" placeholder="Look for interface..." />
                        <Icon><FaSearch /></Icon>
                    </SearchInput>
                    <IntroSection>
                        <Slogan>Design outstanding and professional interior website</Slogan>
                        <Description>Website selling furniture is like the face of your business. Especially in the field of furniture, there are many competitors.</Description>
                        <ButtonContainer>
                            <Button text="Log in"></Button>
                            <Button text="Trial" theme="filled"></Button>
                        </ButtonContainer>
                    </IntroSection>
                </SearchBox>
            </SearchContainer>
        )
    }

    return (
        <SearchContainer>
            <img src={ImgSearch} alt="Search" />
            <LayoutContainer>
                <SearchBox>
                    <SearchInput>
                        <input type="text" placeholder="Look for interface..." />
                        <Icon><FaSearch /></Icon>
                    </SearchInput>
                </SearchBox>
            </LayoutContainer>
        </SearchContainer>
    )
}

export default SearchSection;