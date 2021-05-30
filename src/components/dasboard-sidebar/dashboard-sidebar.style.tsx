import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardSidebarContainer = styled.div`
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 0px 30px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarFooter = styled.div`
    color: ${({ theme }) => theme.colors.white};
    align-self: flex-end;
`;

export const SideLink = styled(NavLink)`
    margin-left: 15px;
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.skyBlueShade};

    &.active {
        color: ${({ theme }) => theme.colors.pinkShade};
        font-weight: 500;
    }
`;

export const SideLinkIcon = styled.img`
    width: 100%;
`;

export const SideLinkContainer = styled.div`
    display: flex;
    margin: 25px 0;
`;

export const IconContainer = styled.div`
    width: 18px;
    height: 18px;
`;

export const InitialsContainer = styled.div`
    border-radius: 50%;
    background-color: #1c1335;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;
`;

export const NavbarHeader = styled.div`
    border-bottom: 1px solid #eeeff7;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;

    button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        img {
            transition: transform 300ms ease-out;

            &.rotate {
                transform: rotate(180deg);
                transition: transform 300ms ease-out;
            }
        }
    }
`;

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .name {
        font-weight: 600;
        font-size: 1.6rem;
    }

    .action {
        font-weight: 400;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.skyBlueShade};
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const DropdownContainer = styled.div`
    height: 160px;
    background: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 233px;
    top: 100px;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease-out;

    &.visible {
        visibility: visible;
        opacity: 1;
        top: 70px;
    }
`;

export const DropDownItem = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.grey01};
    padding: 12px 25px;
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
    z-index: 12;

    &:last-child {
        border-top: none;
    }

    &.add {
        padding: 5px 25px;
        color: ${({ theme }) => theme.colors.pinkShade};
    }
`;
