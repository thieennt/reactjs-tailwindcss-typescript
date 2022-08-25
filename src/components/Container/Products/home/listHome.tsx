import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Home, { IHome } from '.';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../../responsive';

const ListHomesContainer = styled.div`
    ${tw`
        // max-w-screen-lg
        w-full
        // flex
        // flex-col
        items-center
        justify-center
    `}
`

const Title = styled.h2`
    ${tw`

    `}
`

const HomesContainer = styled.div`
    ${tw`
        w-full
        grid

        lg:grid-cols-4
        lg:gap-y-5
        lg:gap-x-7
    `}
`

const HomesContainerMobile = styled.div`
    ${tw`
        w-full
        justify-center
    `}
`

const ListHomes = () => {
    const [current, setCurrent] = useState(0)

    const isMobile = useMediaQuery({ maxWidth: SCREENS.md })

    const home1: IHome = {
        name: "Urban Home",
        price: 500,
        thumbnailUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
    }

    const home2: IHome = {
        name: "Urban Home",
        price: 500,
        thumbnailUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    }

    const home3: IHome = {
        name: "Urban Home",
        price: 500,
        thumbnailUrl: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    }

    if (isMobile) {
        return (
            <ListHomesContainer>
                <HomesContainerMobile>
                    <Carousel
                        value={current}
                        onChange={setCurrent}
                        slides={[
                            (<Home {...home1} />),
                            (<Home {...home2} />),
                            (<Home {...home3} />),
                            (<Home {...home2} />),
                            (<Home {...home1} />),
                            (<Home {...home2} />),
                            (<Home {...home3} />),
                            (<Home {...home2} />)
                        ]}
                        plugins={[
                            "clickToChange",
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2
                                }
                            }
                        ]}
                        breakpoints={{
                            640: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 1
                                        }
                                    }
                                ]
                            },
                            768: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2
                                        }
                                    }
                                ]
                            }
                        }}
                    >

                    </Carousel>
                    <Dots
                        value={current}
                        onChange={setCurrent}
                        number={8}
                    />
                </HomesContainerMobile>
            </ListHomesContainer >
        )
    }

    return (
        <ListHomesContainer>
            <Title></Title>
            <HomesContainer>
                <Home {...home1} />
                <Home {...home2} />
                <Home {...home3} />
                <Home {...home2} />
                <Home {...home1} />
                <Home {...home2} />
                <Home {...home3} />
                <Home {...home2} />
            </HomesContainer>
        </ListHomesContainer>
    )
}

export default ListHomes;