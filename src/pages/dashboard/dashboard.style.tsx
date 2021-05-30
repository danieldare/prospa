import styled from 'styled-components';

export const DashboardContainer = styled.div``;
export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;
export const DashboardHeadingOne = styled.h1`
    font-size: 24px;
    font-weight: 700;
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
    width: 100%;
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

    span {
        font-size: 2.4rem;
    }
`;

export const CashOutFlowContainer = styled.div`
    background: #fff;
    padding: 20px;
`;

export const AccountStats = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    column-gap: 30px;
    margin-top: 30px;
`;

export const AccountStatsTitle = styled.h1`
    font-size: 18px;
    color: #1c1335;
    font-weight: 600;
`;

export const CashFlowOptions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CashFlowOption = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CashFlowOptionName = styled.div`
    color: #8397ab;
    font-size: 1.4rem;
`;

export const CashFlowIconContainer = styled.div`
    border-radius: 4px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.pink {
        background: #e900ae;
    }
`;

export const CashFlowOptionLeft = styled.div`
    display: flex;
`;
