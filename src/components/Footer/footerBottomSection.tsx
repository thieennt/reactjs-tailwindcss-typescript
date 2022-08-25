import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import AppStore from '../../assets/images/Website/app-store.svg';
import GGPlay from '../../assets/images/Website/google-play.svg';
import { SCREENS } from '../responsive';

const FooterBottom = styled.div`
    ${tw`
        grid
        grid-cols-1
        gap-y-7
        py-8

        lg:grid-cols-3
        lg:gap-x-7
    `}
`

const SectionContainer = styled.div`
    ${tw`
       
    `}
`

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-disc
        pl-5
    `}
`

const ListItem = styled.li`
    ${tw`
        mb-3
        text-sm
    `}

    & > a {
        text-xs
    }
`

const HeaderTitle = styled.h3`
    ${tw`
        font-semibold
        text-base
        pb-4
        text-center

        lg:text-left
    `}
`

const ListIcon = styled.div`
    ${tw`
        flex
        text-secondary-color
        pb-8
        pl-5
        justify-center

        lg:pl-5
        lg:justify-start
    `}

    a { 
        font-size: 18px;
        padding-right: 8px;
    }

    a:hover {
        color: #A73D10;
        cursor: pointer;
    }
`

const DownloadApp = styled.div`
    ${tw`
        flex
        pl-5
        justify-center

        lg:justify-start
    `}

    img { 
        width: 70%;
        // max-height: 30px;
        // object-fit: contain;
        object-fit: cover;
        border-radius: 4px;
    }

    @media (min-width: ${SCREENS.md}) {

        img { 
            width: 80%;
        }
    }

    @media (min-width: ${SCREENS.lg}) {

        img { 
            width: 80%;
        }
    }
`

const FooterBottomSection = () => {
    return (
        <FooterBottom>
            <SectionContainer>
                <HeaderTitle>HEADQUARTERS</HeaderTitle>
                <LinksList>
                    <ListItem>4th floor, Flemington Building, 182 Le Dai Hanh, Ward 15, District 11, Ho Chi Minh.</ListItem>
                    <ListItem>Support call center: <a href="tel:1900,636,099">1900,636,099</a> (Monday to Friday from 8:00 am to 6:00 pm; Saturday and Sunday from 8:00 am to 5:00 pm)</ListItem>
                    <ListItem>Out-of-hours support: <a href="tel:0963.346.820">0963.346.820</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>HANOI OFFICE</HeaderTitle>
                <LinksList>
                    <ListItem>1st floor, GP Invest Building, 170 De La Thanh, O Cho Dua, Dong Da, Hanoi.</ListItem>
                    <ListItem>Support call center: <a href="tel:1900,636,099">1900,636,099</a> (Monday to Friday from 8:00 am to 6:00 pm; Saturday and Sunday from 8:00 am to 5:00 pm)</ListItem>
                    <ListItem>Hotline for service consultation: <a href="tel:0963.346.820">0963.346.820</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>CONNECT WITH TATIVAN</HeaderTitle>
                <ListIcon>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </ListIcon>

                <HeaderTitle>DOWNLOAD HARAVAN MOBILE APP</HeaderTitle>
                <DownloadApp>
                    <a href="#"><img src={AppStore} alt="" /></a>
                    <a href="#"><img src={GGPlay} alt="" /></a>
                </DownloadApp>
            </SectionContainer>
        </FooterBottom>
    )
}

export default FooterBottomSection;