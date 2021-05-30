import styled from 'styled-components';

export const DashboardLayoutContainer = styled.div`
    width: 100%;
`;

export const DasboardMainContent = styled.div`
    padding: 30px 80px;
    margin-left: 300px;
    background: ${({ theme }) => theme.colors.grey01};
    height: 100vh;
`;
