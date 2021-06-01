import styled from 'styled-components';

export const DashboardNavBarContainer = styled.div`
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 80px 0 30px;
    font-weight: 600;
    background: #fff;
    position: sticky;
    margin-left: 300px;
    padding-left: 75px;

    @media (max-width: 854px) {
        margin-left: 0px;
        padding: 0 30px 0 30px;
    }
`;

export const DashboardName = styled.div`
    color: ${({ theme }) => theme.colors.skyBlueShade};
`;

export const RightOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const UserImgContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const HamburgerContainer = styled.div`
    width: 20px;
    margin-right: 10px;
    position: relative;
    top: 5px;
    cursor: pointer;

    img {
        width: 100%;
    }
`;

export const BrandContainer = styled.div`
    display: flex;
    align-items: center;
`;
