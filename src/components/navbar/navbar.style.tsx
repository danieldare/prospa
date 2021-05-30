import styled from 'styled-components';

export const NavBarContainer = styled.div`
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: flex-end;
    padding: 0 30px;
    font-weight: 600;

    .action {
        color: ${({ theme }) => theme.colors.pinkShade};
        text-decoration: none;
    }
`;
