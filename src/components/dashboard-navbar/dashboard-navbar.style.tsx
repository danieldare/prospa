import styled from 'styled-components';

export const DashboardNavBarContainer = styled.div`
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    font-weight: 600;
    background: #fff;
    position: sticky;
    margin-left: 300px;
    padding-left: 75px;
`;

export const DashboardName = styled.div`
    color: ${({ theme }) => theme.colors.shyShade};
`;

export const RightOptions = styled.div``;
