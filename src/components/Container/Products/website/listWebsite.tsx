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
        thumbnailUrl: "https://s3-alpha-sig.figma.com/img/2c13/fb5b/f336cfed975394248c2ce1cc022b5478?Expires=1650240000&Signature=Q2Dsy0YJfOu6q-hKhL5iUi64By7N8llzfnfxfR-fRTu30pmKXil6dQhSs3-DdB8uyjyQ7wjVACNt7ezk5xj1Ks4nyKUCiaWd4BZT3v5fl91p2PsUDyfSRUn4vSFJfiawklTZR3YiuEfeqkEsEGA~E-NLGNK0OVMyXdYAcKT-wAIJhNE~qOIPRo~KZXNQB0Der7JkLsRg9ffqmYCF1w4bTdmbKNQ7CbIPPxLoctAAWw7s2yJg5ekO5-gLK97a46NaIIwKzXaMPn5F4JBvJy7P7yZrQHli4PpMcqfMLQTs~dJr1m7xIXhUZGP3iP9IILjGoKutT1YQih-PDnmKSn~cWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }

    const website3: IWebsite = {
        name: "Beauty Website",
        thumbnailUrl: "https://s3-alpha-sig.figma.com/img/0e3e/88be/774d1bb45a44dadde906c7d303c4856a?Expires=1650240000&Signature=K4iZlndAi8~GshO-kgS7Ka4OGNdDk78swtpYWD91qSqW1ILkNmz11yEkVuaVY~7cUWPhwjk5XpEhDZA6UC1s2ZcMRietKrSrnWRVVPshWznJEfjbR9DVYwD0xd46bFPkwlVrPF5WNNHvAYniQN3KxZD5F71q15zkpfapd~oHY3j1MoS9QdgoxwdBLicNIt6BpyL8VlgIY6XvDsVHhmwd9A591GxVv3KNgGg4uzsNaByrbN~tm4l5tLEzaMgEzTZg9Ad8Xpvv9Mh0ihgWXZ6ynunBmCPaHgpydRGnyLVbEkWE87hUr28K3JhPHNMSqQqB7uJ4akH43NGI1eNHYutUvw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }

    const website4: IWebsite = {
        name: "Furniture Website",
        thumbnailUrl: "https://s3-alpha-sig.figma.com/img/73f3/298e/e9264207fdf7247a02a7976608783bb8?Expires=1650240000&Signature=KjbP6qYmf~Ge2~ts4rMZ7qeyM-rwGUUgZTVo6fQ8HiYhtbwAqrhOFn4nzVuflHSfAmgxTCirbKbTCLkixTg9s-P-4IWlXOdBWwzijt2O4pyZzZqI4GHBikFwQ1ykMVT-wky~7f2znjKA2XGLue374jhszYuNQdnsn99f0Xu4enw60weoAs6OuVmZHobQQ1tl2A2LYBoVpR0UqEt6YpWHDYyZeOXSnvpuh7LQsZ-apRRrHs7ygqlBomULHbYk-DfFU6KmPvjP9dCa5Q46AgORYeRe5W-vSrrCzl-6VZ26KGm6juBxcBziS1yRUDPyoykipgPfgrFPQuOODi5cZQ4vEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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