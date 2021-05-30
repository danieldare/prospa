import styled, { css } from 'styled-components';

import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProp extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'> {
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    variantType?: 'grey' | 'black';
    children: React.ReactNode;
}

const ButtonComponent = styled.button<IButtonProp>`
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    height: 5rem;
    font-weight: 500;
    border-radius: 5px;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors?.pinkShade};
    border: 1px solid ${({ theme }) => theme.colors?.pinkShade}};
    color: ${({ theme }) => theme.colors?.white}};

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}


        &:hover {
            opacity:0.8;
        }

        &:active {
            background-color: ${({ theme }) => theme.colors?.pinkShade};
        }


    &:active {
        background-color: ${({ theme }) => theme.colors?.pinkShade};;
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
        background-color: ${({ theme }) => theme.colors?.grey01};;
        border-color: ${({ theme }) => theme.colors?.grey01};
        color: ${({ theme }) => theme.colors?.white};
        cursor: not-allowed;
    }

    ${({ theme }) => theme.media?.extraLarge} {
        height: 4.8rem;
    }

       
`;

const Button: React.FC<IButtonProp> = ({ children, ...rest }) => (
    <ButtonComponent {...rest}>{children}</ButtonComponent>
);

export { Button };
