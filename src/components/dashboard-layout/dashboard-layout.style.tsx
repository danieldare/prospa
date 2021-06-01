import styled from 'styled-components';

export const DashboardLayoutContainer = styled.div`
    width: 100%;
`;

export const DasboardMainContent = styled.div`
    padding: 30px 60px;
    margin-left: 300px;
    background: ${({ theme }) => theme.colors.grey01};
    height: 100%;

    @media (max-width: 854px) {
        margin-left: 0px;
    }

    @media (max-width: 554px) {
        padding: 30px 20px;
    }
`;
