import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Home, { IWebsite } from '.';
import Website from '.';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../../responsive';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const ListWebsitesContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
    `}
`

const WebsitesContainer = styled.div`
    ${tw`
        w-full
        grid
        grid-cols-1
        gap-x-7
        gap-y-8
        justify-center

        lg:grid-cols-3
        lg:gap-y-5
        lg:gap-x-7
    `}
`

const WebsitesContainerMobile = styled.div`
    ${tw`
        w-full
        justify-center
    `}
`

const ListWebsites = () => {
    const [current, setCurrent] = useState(0)

    const isMobile = useMediaQuery({ maxWidth: SCREENS.md })

    const website1: IWebsite = {
        name: "Fashion Website",
        thumbnailUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }

    const website2: IWebsite = {
        name: "Technology Website",
        thumbnailUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }

    const website3: IWebsite = {
        name: "Beauty Website",
        thumbnailUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }

    const website4: IWebsite = {
        name: "Furniture Website",
        thumbnailUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }

    if (isMobile) {
        return (
            <ListWebsitesContainer>
                <WebsitesContainerMobile>
                    <Carousel
                        value={current}
                        onChange={setCurrent}
                        slides={[
                            (<Home {...website1} />),
                            (<Home {...website2} />),
                            (<Home {...website3} />),
                            (<Home {...website4} />),
                            (<Home {...website3} />),
                            (<Home {...website1} />)
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
                        number={6}
                    />
                </WebsitesContainerMobile>
            </ListWebsitesContainer >
        )
    }


    return (
        <ListWebsitesContainer>
            <WebsitesContainer>
                <Website {...website1} />
                <Website {...website2} />
                <Website {...website3} />
                <Website {...website4} />
                <Website {...website3} />
                <Website {...website1} />
            </WebsitesContainer>
        </ListWebsitesContainer>
    )
}

export default ListWebsites;