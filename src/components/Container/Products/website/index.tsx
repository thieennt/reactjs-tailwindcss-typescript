import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '../../../Button';

export interface IWebsite {
    thumbnailUrl: string;
    name: string;
}

const WebsiteContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-[90%]
        lg:w-full
    `}

    .group {
        width: 100%;
    }
`

const WebsiteThumbnail = styled.div`
    width: 100%;
    height: auto;
    
    img {
        width: 100%;
        height: auto;
        // max-height: 180px;
        object-fit: cover;
        border-radius: 8px;
        aspect-ratio: 2 / 1;
    }

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

        aspect-ratio[2/1]
    `}
`

const WebsiteName = styled.h3`
    ${tw`
        font-semibold
        text-base
        pt-2
        pb-4
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

const OverlayBackground = styled.div`
        ${tw`
        h-full
        absolute 
        bottom-0 
        left-0 
        w-full 

        z-0
        inset-0 
        bg-black
        opacity-0 
        group-hover:opacity-60
        transition-all
        rounded-[8px]
    `}
`

const Website = (props: IWebsite) => {
    const { thumbnailUrl, name } = props;
    return (
        <WebsiteContainer>
            <div className="group">
                <WebsiteThumbnail>
                    <img src={thumbnailUrl} alt="" />
                    <ButtonBox>
                        <Button text="View" theme="filled"></Button>
                    </ButtonBox>
                    <OverlayBackground></OverlayBackground>
                </WebsiteThumbnail>
            </div>
            <WebsiteName>{name}</WebsiteName>
        </WebsiteContainer>
    )
}

export default Website;