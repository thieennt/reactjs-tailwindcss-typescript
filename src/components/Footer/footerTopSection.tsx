import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LayoutContainer } from '../Layout/layoutContainer';
import FooterCol from './footerCol';

const FooterStyle = styled.div`
    border-bottom: 1px solid #EBECED;
    ${tw`
        w-full
        // flex
    `}
`;

const FooterTopContainer = styled.div`
    ${tw`
        grid
        grid-cols-1
        gap-y-7
        py-8
        text-center

        md:grid-cols-2
        md:gap-x-7
        md:text-left

        lg:grid-cols-4
        lg:gap-x-7
        lg:text-left
    `}
`


export default function FooterTopSection() {
    return (
        <FooterStyle>
            <FooterTopContainer>
                <FooterCol
                    heading="About WBD Tativan"
                    links={[
                        {
                            title: 'Website Construction',
                            type: 'Link',
                            path: '/',
                        },
                        {
                            title: 'Social Commerce',
                            type: 'Link',
                            path: '/about',
                        },
                        {
                            title: 'Sales Manager',
                            type: 'Link',
                            path: '/projects',
                        },
                        {
                            title: 'Omnichannel retail',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Loyalty Marketing',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Chatbot Harafunnel',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Google Smart Shopping',
                            type: 'Link',
                            path: '/contact',
                        },
                    ]}
                />

                <FooterCol
                    heading="Support"
                    links={[
                        {
                            title: 'Authorized dealer',
                            type: 'Link',
                            path: '/',
                        },
                        {
                            title: 'Partner',
                            type: 'Link',
                            path: '/about',
                        },
                        {
                            title: 'Academy',
                            type: 'Link',
                            path: '/projects',
                        },
                        {
                            title: 'Interface Warehouse',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'App Store',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Delivery manager',
                            type: 'Link',
                            path: '/contact',
                        }
                    ]}
                />

                <FooterCol
                    heading="About WBD Tativan"
                    links={[
                        {
                            title: 'Website Construction',
                            type: 'Link',
                            path: '/',
                        },
                        {
                            title: 'Social Commerce',
                            type: 'Link',
                            path: '/about',
                        },
                        {
                            title: 'Sales Manager',
                            type: 'Link',
                            path: '/projects',
                        },
                        {
                            title: 'Omnichannel retail',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Loyalty Marketing',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Chatbot Harafunnel',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Google Smart Shopping',
                            type: 'Link',
                            path: '/contact',
                        },
                    ]}
                />

                <FooterCol
                    heading="BUSINESS WEBSITE"
                    links={[
                        {
                            title: 'Fashion website design',
                            path: '/',
                            type: 'Link',
                        },
                        {
                            title: 'Cosmetics website design',
                            type: 'Link',
                            path: '/about',
                        },
                        {
                            title: 'Mobile website design',
                            type: 'Link',
                            path: '/projects',
                        },
                        {
                            title: 'Electronic website design',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Mother and baby website design',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Interior website design',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Jewelry website design',
                            type: 'Link',
                            path: '/contact',
                        },
                        {
                            title: 'Business website design',
                            type: 'Link',
                            path: '/contact',
                        },
                    ]}
                />
            </FooterTopContainer>
        </FooterStyle>
    );
}