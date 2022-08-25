import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown } from "react-icons/fa";
import Button from '../Button';
import NavItems from './navItem';
import { SCREENS } from '../responsive';
import { LayoutContainer } from '../Layout/layoutContainer';

const NavbarContainer = styled.div`
    ${tw`
        w-full
        flex
        py-3
        bg-background
        fixed
        z-50
        shadow-2xl
    `}

`
const LogoContainer = styled.div`
    ${tw`
        lg:w-1/5
        w-full
        flex
    `}
`
const Logo = styled.h2`
    ${tw`
        flex
        font-bold
        items-center
        text-[18px]

        lg:after:flex
        lg:after:h-4
        lg:after:bg-black
        lg:after:w-[1px]
        lg:after:mx-4

    `}
`


const Navbar = () => {
    return (
        <NavbarContainer>
            <LayoutContainer>
                <LogoContainer>
                    <Logo>Interface Store</Logo>
                </LogoContainer>
                <NavItems />
            </LayoutContainer>
        </NavbarContainer>
    )
}

export default Navbar;