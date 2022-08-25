import React from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
}

const BaseButton = styled.button`
    ${tw`
        px-8
        py-1.5
        outline-none
        rounded-full
        text-white
        text-base
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `}
`

const OutlineButton = styled(BaseButton)`
    ${tw`
        bg-primary-color
        hover:bg-white
        hover:text-primary-color
        hover:border-primary-color
    `}
`

const FilledButton = styled(BaseButton)`
    ${tw`
        border-primary-color
        text-primary-color
        bg-background
        hover:bg-primary-color
        hover:text-white
        hover:border-transparent
    `}
`

const Button = (props: IButtonProps) => {

    const { theme, text } = props;

    if (theme === 'filled')
        return <FilledButton>{text}</FilledButton>
    else return <OutlineButton>{text}</OutlineButton>
}

export default Button