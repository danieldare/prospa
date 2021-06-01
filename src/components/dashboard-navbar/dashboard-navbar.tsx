import HamburgerIcon from 'src/assets/img/menu.png';
import { useState, useRef } from 'react';
import { useClickAway } from 'use-click-away';
import {
    DashboardNavBarContainer,
    DashboardName,
    RightOptions,
    UserImgContainer,
    BrandContainer,
    HamburgerContainer,
} from './dashboard-navbar.style';
import MobileMenu from '../dasboard-sidebar/mobile-menu';
import BellIcon from '../../assets/img/bell.png';
import Photo from '../../assets/img/user.jpeg';

export const DashboardNavbar = () => {
    const mobileMenu = useRef(null);
    const [mobileMenuDownVisibility, setMobileMenuDownVisibility] = useState(false);
    useClickAway(mobileMenu, () => setMobileMenuDownVisibility(false));

    return (
        <DashboardNavBarContainer ref={mobileMenu}>
            <MobileMenu
                openSideDrawer={mobileMenuDownVisibility}
                onCloseSideDrawer={() => setMobileMenuDownVisibility(false)}
                onOverlayClick={() => setMobileMenuDownVisibility(false)}
            />
            <BrandContainer>
                <HamburgerContainer onClick={() => setMobileMenuDownVisibility(true)}>
                    <img src={HamburgerIcon} alt="hamburger" />
                </HamburgerContainer>
                <DashboardName>Dashboard</DashboardName>
            </BrandContainer>
            <RightOptions>
                <img src={BellIcon} alt="bell" />
                <UserImgContainer>
                    <img src={Photo} alt="user" />
                </UserImgContainer>
            </RightOptions>
        </DashboardNavBarContainer>
    );
};
