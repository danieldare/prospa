import styled from 'styled-components';

export const DashboardContainer = styled.div``;
export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 634px) {
        display: block;
        grid-template-columns: 1fr;
    }
`;
export const DashboardHeadingOne = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;

export const DashboardHeadingContainer = styled.div`
    @media (max-width: 634px) {
        margin-bottom: 20px;
    }
`;
export const DashboardHeadingTwo = styled.h2`
    font-size: 15px;
    font-weight: 500;

    span {
        color: ${({ theme }) => theme.colors.pinkShade};
        text-decoration: underline;
    }
`;

export const DashboardBody = styled.div``;
export const AccountInfoCard = styled.div`
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: rgb(131 151 171 / 16%) 0px 4px 6px;
    border-radius: 6px;
    max-height: 170px;
`;

export const AccountInfoTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const AccountInfoCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    width: 100%;

    @media (max-width: 1111px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 854px) {
        display: grid;
        flex-direction: column;
    }

    @media (max-width: 634px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const AccountType = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
`;
export const AccountName = styled.div`
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.skyBlueShade};
`;
export const AccountIconContainer = styled.div`
    width: 40px;
`;
export const AccountIcon = styled.img`
    width: 100%;
`;

export const AccountBalance = styled.div`
    font-size: 3.6rem;
    font-weight: 500;

    span {
        font-size: 2.4rem;
        font-weight: 500;
    }
`;

export const CashOutFlowContainer = styled.div`
    background: #fff;
    padding: 20px;
    box-shadow: rgb(131 151 171 / 16%) 0px 4px 6px;
`;

export const AccountStats = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 969px) {
        display: flex;
        flex-direction: column;
    }
`;

export const AccountStatsTitle = styled.h1`
    font-size: 18px;
    color: #1c1335;
    font-weight: 600;
    margin-bottom: 15px;
`;

export const CashFlowOptions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CashFlowOption = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    justify-content: space-between;
    margin: 20px 0;
`;

export const CashFlowOptionName = styled.div`
    color: #8397ab;
    font-size: 1.3rem;
`;

export const CashFlowIconContainer = styled.div`
    border-radius: 4px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    &.pink {
        background: #e900ae;
    }

    &.lilac {
        background-color: #17ecd4;
    }

    &.purple {
        background-color: #c155ff;
    }

    &.green {
        background: #00ec47;
    }
`;

export const CashFlowOptionLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const ProgressContainer = styled.div`
    width: 100%;

    span {
        font-size: 1.4rem;
        font-weight: 600;
    }
`;

export const TransactionsContainer = styled.div`
    background-color: #fff;
    padding: 30px;
    box-shadow: rgb(131 151 171 / 16%) 0px 4px 6px;
`;

export const TransactionHeaderText = styled.div`
    font-weight: 600;
`;

export const TransactionsContainerTitle = styled.div`
    font-size: 1.5rem;
`;

export const TransactionsContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button {
        color: ${({ theme }) => theme.colors?.pinkShade};
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors?.pinkShade};
        background-color: #fff;
        align-self: center;
        padding: 5px 10px;
        border-radius: 6px;
        font-size: 1.4rem;
        font-weight: 600;
    }
`;

export const TransactionsContainerBody = styled.div``;

export const UserName = styled.div`
    font-weight: 600;
    color: #1c1335;
`;

export const TransactionDuration = styled.div`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.skyBlueShade};
`;

export const TransactionAmount = styled.div`
    font-size: 1.5rem;
    color: #1c1335;
    font-weight: 500;
`;

export const TransactionStyle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f8fb;
    padding: 20px 0;
`;

export const TransactionLeftStyle = styled.div`
    display: flex;
    align-items: center;
`;

export const TransactionStyleIcon = styled.div`
    width: 18px;
    margin-right: 15px;
    background: #f4f8fb;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MoneyFlowContainer = styled.div`
    display: flex;
`;

export const MoneyFlowSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

export const MoneyFlowText = styled.div`
    color: ${({ theme }) => theme.colors.skyBlueShade};
    font-size: 1.4rem;
    font-weight: 500;
`;

export const MoneyFlowAmount = styled.div`
    font-weight: 600;
    margin-top: 1px;
    font-size: 1.4rem;
`;

export const ChartContainer = styled.div`
    overflow: hidden;
    margin-top: 10px;
`;
