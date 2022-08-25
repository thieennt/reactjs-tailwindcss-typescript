import React from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { FaAngleDown } from "react-icons/fa";
import Button from '../Button';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyle';


const ListContainer = styled.ul<{ menu?: any }>`
    ${tw`
        flex
        list-none
        items-center
        `};

        ${({ menu }) => menu && css`
            ${tw`
                w-full
            `}
        `}
`

const MenuNav = styled.div`
    ${tw`
        w-full
        flex
        justify-between
    `}
`

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        flex
        font-medium
        pr-10
        items-center
        justify-center
        cursor-pointer
        transition-all
        duration-300
        ease-in-out
        hover:text-primary-color
        
        md:pr-8

    `};

    a {
        font-size: 16px;
    }

    ${({ menu }) => menu && css`
        ${tw`
            w-full
            flex
            justify-between
            text-black
            focus:text-white
            
            cursor-pointer
            p-0
            pb-4
        `}

        a {
            font-size: 16px;
        }
    `}
`


const ButtonContainer = styled.div<{ menu?: any }>`
    ${tw`
        flex
        ease-in-out
    `};

    ${({ menu }) => menu && css`
        ${tw`
            flex
            flex-row
            w-full
            pt-8
        `}
    `}
`

const MenuChild = styled.ul<{ menu?: any }>`
    ${tw`
        list-none
        hidden
        group-hover:block
        z-30
        absolute
        top-16
        w-1/6
        shadow-2xl
        bg-background
        pb-5
    `};

    ${({ menu }) => menu && css`
        ${tw`
            hidden
            group-focus:block
            shadow-none
            bg-transparent
            relative
            w-full
            top-0
        `}
    `}
`

const MenuItem = styled.li<{ menu?: any }>`
    ${tw`
        flex
        pl-10
        text-sm
        text-black
        py-2
        
        
    `};

    ${({ menu }) => menu && css`
        ${tw`
        flex
        pl-10
        text-sm
        text-black
        py-2
        `}
    `}
`


const NavItems = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.md })

    if (isMobile) {
        return (
            <Menu right styles={menuStyles} >
                <ListContainer menu>
                    <div className="group">
                        <NavItem menu>
                            <a href="#">Website</a>
                            <span>
                                <FaAngleDown />
                            </span>
                        </NavItem>
                        <MenuChild menu>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                        </MenuChild>
                    </div>
                    <div className="group">
                        <NavItem menu>
                            <a href="#">Sell</a>
                            <span>
                                <FaAngleDown />
                            </span>
                        </NavItem>
                        <MenuChild menu>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                        </MenuChild>
                    </div>
                    <div className="group">
                        <NavItem menu>
                            <a href="#">Marketing</a>
                            <span>
                                <FaAngleDown />
                            </span>
                        </NavItem>
                        <MenuChild menu>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                        </MenuChild>
                    </div>
                    <div className="group">
                        <NavItem menu>
                            <a href="#">Manager</a>
                            <span>
                                <FaAngleDown />
                            </span>
                        </NavItem>
                        <MenuChild menu>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                            <MenuItem menu><a href="#">Sub Menu</a></MenuItem>
                        </MenuChild>
                    </div>
                </ListContainer>

            </Menu>
        )
    }

    return (
        <MenuNav>
            <ListContainer>
                <div className="group">
                    <NavItem >
                        <a href="#">Website</a>
                        <span>
                            <FaAngleDown />
                        </span>
                    </NavItem>
                    <MenuChild>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                    </MenuChild>
                </div>
                <div className="group">
                    <NavItem >
                        <a href="#">Sell</a>
                        <span>
                            <FaAngleDown />
                        </span>
                    </NavItem>
                    <MenuChild>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                    </MenuChild>
                </div>
                <div className="group">
                    <NavItem >
                        <a href="#">Marketing</a>
                        <span>
                            <FaAngleDown />
                        </span>
                    </NavItem>
                    <MenuChild>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                    </MenuChild>
                </div>
                <div className="group">
                    <NavItem >
                        <a href="#">Manager</a>
                        <span>
                            <FaAngleDown />
                        </span>
                    </NavItem>
                    <MenuChild>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                        <MenuItem><a href="#">Sub Menu</a></MenuItem>
                    </MenuChild>
                </div>

            </ListContainer>
            <ButtonContainer>
                <Button text="Log in"></Button>
                <Button text="Trial" theme="filled"></Button>
            </ButtonContainer>
        </MenuNav>
    )
}

export default NavItems;