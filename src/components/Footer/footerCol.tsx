import React from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const ColStyle = styled.div`
    ${tw`
        w-full
    `}
`;

const Title = styled.h3`
    ${tw`
        font-semibold
        text-base
        pb-4
    `}
`

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
    `}
`

const ListItem = styled.li`
    ${tw`
        mb-3
        text-sm
        hover:text-primary-color
    `}

    & > a {
        text-xs
    }

`

export default function FooterCol({
    heading = 'Col Heading',
    links = [
        {
            type: 'Link',
            title: 'Home',
            path: '/home',
        }
    ],
}) {
    return (
        <BrowserRouter>
            <ColStyle>
                <Title>{heading}</Title>
                <LinksList>
                    {links.map((item, index) => (
                        <ListItem key={index}>
                            {item.type === 'Link' ? (
                                <Link to={item.path}>{item.title}</Link>
                            ) : (
                                <a href={item.path} target="_blank" rel="noreferrer">
                                    {item.title}
                                </a>
                            )}
                        </ListItem>
                    ))}
                </LinksList>
            </ColStyle>
        </BrowserRouter >
    );
}