import styled from 'styled-components';

export const SidebarContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.purpleShade01};
    width: 358px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: grid;
    padding: 30px 20px;
    color: ${({ theme }) => theme.colors.white};
`;

export const SidebarFooter = styled.div`
    color: ${({ theme }) => theme.colors.white};
    align-self: flex-end;
`;

export const ProgressContainer = styled.div``;

export const TitleText = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3rem;
    margin: 20px 0;
`;

export const BriefText = styled.div`
    font-size: 1.4rem;
    margin-bottom: 50px;
`;

export const HorizontalProgressContainer = styled.div``;

export const ProgressDataImage = styled.div`
    align-self: center;
`;
