import React from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

interface InputProps {
    label: string
    placeholder: string
    type?: string
    required: boolean
}

const InputGroup = styled.div`  
    ${tw`
        w-full
    `}
`

const LabelInput = styled.label`
    ${tw`
        font-semibold
        text-[15px]
    `}
`

const InputElement = styled.input`
    ${tw`
        w-full
        p-2.5
        rounded-[8px]
        text-sm
        mt-2.5

        focus:outline-none
    `}
`

const Input = (props: InputProps) => {

    const { label, placeholder, type, required } = props;

    return (
        <InputGroup>
            <LabelInput>{label}</LabelInput>
            <InputElement type={type} placeholder={placeholder} required={required}></InputElement>
        </InputGroup>
    )
}

export default Input;