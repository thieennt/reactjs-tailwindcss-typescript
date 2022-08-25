import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '../../../Button';

export interface IHome {
    thumbnailUrl: string;
    name: string;
    price: number;
}

const HomeContainer = styled.div`
    ${tw`
        flex
        flex-col
        mb-8
        w-[90%]
        lg:w-full
    `}
`

const HomeThumbnail = styled.div`

    ${tw`
        w-full
        relative
        flex
        items-center
        justify-center

        group-hover:bottom-0 
        transition-all 
        left-0 
        text-white 
        z-30

        aspect-ratio[1/1]
    `}

    img {

        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
        aspect-ratio: 1 / 1;
    }
`

const HomeInfo = styled.div`
    ${tw`
        flex
        flex-row
        justify-between
        pt-2
    `}
`

const HomeName = styled.h3`
    ${tw`
        font-semibold
        text-base
    `}
`

const HomePrice = styled.h5`
    ${tw`
        text-base
    `}
`

const OverlayBackground = styled.div`
        ${tw`
        rounded-[8px]
        
        z-0
        inset-0 
        bg-black
        opacity-0 
        group-hover:opacity-60
        transition-all

        absolute
        top-0
        left-0
        right-0
        bottom-0
    `}
`

const ButtonBox = styled.div`
    ${tw`
        absolute
        flex
        justify-center
        items-center
        z-20
        bg-transparent
        opacity-0
        group-hover:opacity-100
        transition-all  
    `}
`

const DetailItem = styled.a`
    ${tw`
        no-underline
        text-sm
        cursor-pointer
        pt-1
    `}
`

const Home = (props: IHome) => {
    const { thumbnailUrl, name, price } = props;
    return (
        <HomeContainer>
            <div className="group">
                <HomeThumbnail >
                    <img src={thumbnailUrl} alt="" />
                    <ButtonBox>
                        <Button text="Reality" theme="filled"></Button>
                    </ButtonBox>
                    <OverlayBackground></OverlayBackground>
                </HomeThumbnail>
            </div>
            <HomeInfo>
                <HomeName>{name}</HomeName>
                <HomePrice>${price}</HomePrice>
            </HomeInfo>
            <DetailItem>Detail view</DetailItem>
        </HomeContainer>
    )
}

export default Home;