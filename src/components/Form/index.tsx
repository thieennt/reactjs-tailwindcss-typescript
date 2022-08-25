import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '../Button';
import { LayoutContainer } from '../Layout/layoutContainer';
import { SCREENS } from '../responsive';
import Input from '../Input';


const FormContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-center
        pt-16
        bg-background-form
    `}
`

const Form = styled.div`
    ${tw`
        w-10/12
        flex
        flex-col
        justify-center

        lg:w-8/12
    `}
`

const Heading = styled.div`
    ${tw`
        w-full
        pb-6
    `}

    h2 {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
    }

    p {
        text-align: center;
        padding-top: 12px;
        font-size: 14px;
    }

    @media (min-width: ${SCREENS.md}) {

        p {
            font-size: 16px;
        }
    }

    @media (min-width: ${SCREENS.lg}) {

        p {
            font-size: 16px;
        }
    }
`

const InputGroup = styled.div`
    ${tw`
        grid
        grid-cols-1
        gap-5

        md:grid-cols-2
        md:gap-x-5

        lg:grid-cols-2
        lg:gap-x-5
    `}
`

const InputMessageElement = styled.div`
    ${tw`
        w-full
        pt-5
    `}

    label {
        font-weight: 600;
        font-size: 15px;
    }

    textarea {
        width: 100%;
        height: 150px;
        border-radius: 8px;
        padding: 12px;
        font-size: 14px;
        margin-top: 10px;
    }

    textarea:focus {
        outline:none;
    }
`

const ButtonBox = styled.div`
    ${tw`
        flex
        items-center
        justify-center
        z-20
        bg-transparent
        transition-all  
        pt-3
        mb-10

        lg:justify-start
        md:justify-start
    `}
`

const FormSection = () => {
    return (
        <FormContainer>
            <LayoutContainer>
                <Form>
                    <Heading>
                        <h2>You still have not found a satisfactory website interface</h2>
                        <p>You can suggest us your desired website look,
                            interface can help you business efficiently.</p>
                    </Heading>
                    <InputGroup>
                        <Input label="Full name" type="text" placeholder="Enter your full name" required></Input>
                        <Input label="Email" type="email" placeholder="Enter your email" required></Input>
                    </InputGroup>
                    <InputMessageElement>
                        <label>Message</label>
                        <textarea placeholder="Typing your message" ></textarea>
                    </InputMessageElement>
                    <ButtonBox>
                        <Button text="Send" theme="outlined"></Button>
                    </ButtonBox>

                </Form>
            </LayoutContainer>
        </FormContainer>
    )
}

export default FormSection;