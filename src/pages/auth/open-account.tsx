/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button } from 'src/components/button';
import icon from '../../assets/img/check.png';
import {
    AuthContainer,
    HeadingOne,
    HeadingTwo,
    QuestionAndAnswerAccordionContainer,
    ButtonWrapper,
    QuestionText,
    AnswerText,
    CheckIcon,
    AnswerContainer,
    RadioInput,
    RadioInputContainer,
    QAndAContainer,
    OpenAccountContainer,
    InfoText,
} from './auth.style';

const questionsAndAnswers = [
    {
        question: 'I have a registered business /  charity with CAC',
        info: "As a registered business you'll get",
        answers: [
            {
                value: 'account in your business name',
            },
            {
                value: 'Send to and receive transfers from all Nigerian banks',
            },
            {
                value: 'Tools for business management',
            },
        ],
    },
    {
        question: 'My Business is not yet registered,  I would like to register',
        info: 'Everything you need to start your business',
        answers: [
            {
                value: 'Registered business name with the CAC',
            },
            {
                value: 'Tax identification number',
            },
            {
                value: 'Your account will be automatically opened on completion',
            },
        ],
    },
    {
        question: 'Im a freelancer I do business in my personal name',
        info: 'Everything you need to start your business',
        answers: [
            {
                value: 'account in your business name',
            },
            {
                value: 'Send and receive transfers from all Nigerian banks',
            },
        ],
    },
];

const QuestionAndAnswerAccordion = ({ data, currentAccordion, handleAccordionClick }: any) => {
    return (
        <QuestionAndAnswerAccordionContainer
            className={currentAccordion ? 'visible' : ''}
            onClick={handleAccordionClick}
        >
            <RadioInputContainer>
                <RadioInput type="radio" id="radio" name="radio" checked={currentAccordion} />
            </RadioInputContainer>
            <QAndAContainer>
                <QuestionText id="radio">{data?.question}</QuestionText>
                <InfoText id="radio" className={currentAccordion ? 'visible' : ''}>
                    {data?.info}
                </InfoText>
                {data?.answers.map((answer) => (
                    <AnswerContainer className={currentAccordion ? 'visible' : ''}>
                        <CheckIcon src={icon} /> <AnswerText>{answer.value}</AnswerText>
                    </AnswerContainer>
                ))}
            </QAndAContainer>
        </QuestionAndAnswerAccordionContainer>
    );
};

const OpenAccount = () => {
    const [selectedAccordionIndex, setSelectedAccordion] = useState(0);

    return (
        <AuthContainer className="open-account">
            <HeadingOne>Open a new business account</HeadingOne>
            <HeadingTwo>A short description come here</HeadingTwo>
            <OpenAccountContainer>
                {questionsAndAnswers.map((item, index) => (
                    <>
                        <QuestionAndAnswerAccordion
                            handleAccordionClick={() => setSelectedAccordion(index)}
                            data={item}
                            index={index}
                            currentAccordion={selectedAccordionIndex === index}
                            selectedAccordionIndex={selectedAccordionIndex}
                        />
                    </>
                ))}
                <ButtonWrapper>
                    <Button>Next</Button>
                </ButtonWrapper>
            </OpenAccountContainer>
        </AuthContainer>
    );
};

export default OpenAccount;
