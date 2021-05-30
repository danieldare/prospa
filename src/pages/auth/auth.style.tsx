import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 376px;
    height: 100%;
    margin: 0 auto;
    transform: translateY(50px);

    &.open-account {
        width: 408px;
    }
`;

export const OpenAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 375px;
    height: 100%;
`;

export const HeadingOne = styled.h1`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPurple};
    font-size: 2.8rem;
    margin-bottom: 8px;
`;

export const HeadingTwo = styled.h2`
    color: ${({ theme }) => theme.colors.skyBlueShade};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
    margin: 5px 0;
`;

export const ButtonWrapper = styled.div`
    margin: 30px 0;
`;

export const QuestionAndAnswerAccordionContainer = styled.label`
    display: grid;
    grid-template-columns: 30px 1fr;
    box-shadow: 0px 3px 5px #8397ab4a;
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 20px;
    max-height: 80px;
    transition: all 300ms ease-in-out;
    overflow: hidden;
    border: 1px solid transparent;
    cursor: pointer;

    &.visible {
        max-height: 500px;
        border: 1px solid ${({ theme }) => theme.colors.pinkShade};
        transition: all 300ms ease-out;
        overflow: hidden;
    }
`;

export const QuestionText = styled.div`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.purpleShade02};
    user-select: none;
`;

export const InfoText = styled.div`
    font-weight: 500;
    font-size: 1.3rem;
    user-select: none;
    color: ${({ theme }) => theme.colors.skyBlueShade};
    margin-top: 5px;

    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease-out;

    &.visible {
        visibility: visible;
        transition: all 300ms ease-out;
        opacity: 1;
    }
`;

export const AnswerText = styled.div`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.skyBlueShade};
    font-size: 1.3rem;
    user-select: none;
`;

export const CheckIcon = styled.img`
    width: 18px;
    align-self: flex-start;
    margin-right: 10px;
`;

export const AnswerContainer = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const QuestionContainer = styled.div`
    display: flex;
`;

export const RadioInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors?.grey06};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    align-self: flex-start;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 0;
        top: 0;
        transition: all 500ms ease-in-out;
        border-radius: 50%;
    }

    &:checked:before {
        content: '';
        background: ${({ theme }) => theme.colors?.pinkShade};
    }

    &:checked {
        border-color: ${({ theme }) => theme.colors?.pinkShade};
        background: ${({ theme }) => theme.colors?.pinkShade};
    }
`;

export const RadioInputContainer = styled.div`
    width: 15px;
    height: 15px;
    position: relative;
    top: 8px;
`;

export const QAndAContainer = styled.div`
    margin-left: 5px;
`;
