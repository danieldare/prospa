import AccountIcon from 'src/assets/img/accountIcon.png';
import ProspaIcon from 'src/assets/img/prospa2.svg';
import Icon from 'src/assets/img/sparkle.png';
import { useLocation } from 'react-router-dom';
import CaretIcon from 'src/assets/img/caret.png';
import { useClickAway } from 'use-click-away';
import { useState, useRef } from 'react';
import {
    DashboardSidebarContainer,
    SideLinkIcon,
    SideLink,
    SideLinkContainer,
    IconContainer,
    InitialsContainer,
    NavbarHeader,
    HeaderText,
    ProfileInfo,
    DropdownContainer,
    DropDownItem,
    SidebarFooter,
} from './dashboard-sidebar.style';

const sideLinks = [
    {
        name: 'Accounts',
        icon: AccountIcon,
        url: '/dashboard',
    },
    {
        name: 'Transfer',
        icon: Icon,
        url: '/transfer',
    },
    {
        name: 'Invoice',
        icon: Icon,
        url: '/invoice',
    },
    {
        name: 'Management',
        icon: Icon,
        url: '/management',
    },
    {
        name: 'Security',
        icon: Icon,
        url: '/security',
    },
    {
        name: 'Support',
        icon: Icon,
        url: '/support',
    },
];

export const DashboardSidebar = () => {
    const dropDownRef = useRef(null);

    const [dropDownVisibility, setDropDownVisibility] = useState(false);
    useClickAway(dropDownRef, () => setDropDownVisibility(false));

    function handleDropDown() {
        setDropDownVisibility(!dropDownVisibility);
    }
    return (
        <DashboardSidebarContainer>
            <DropdownContainer ref={dropDownRef} className={dropDownVisibility ? 'visible' : ''}>
                <DropDownItem>Clayvant Inc</DropDownItem>
                <DropDownItem>Business name 2</DropDownItem>
                <DropDownItem>Business name 3</DropDownItem>
                <DropDownItem className="add">Add a business</DropDownItem>
            </DropdownContainer>
            <div>
                <NavbarHeader>
                    <ProfileInfo>
                        <InitialsContainer>BN</InitialsContainer>
                        <HeaderText>
                            <span className="name">Clayvant Inc</span>
                            <span className="action">Manage account</span>
                        </HeaderText>
                    </ProfileInfo>
                    <button type="button" onClick={handleDropDown} ref={dropDownRef}>
                        <img
                            src={CaretIcon}
                            alt="icon"
                            className={dropDownVisibility ? 'rotate' : ''}
                        />
                    </button>
                </NavbarHeader>
                {sideLinks.map((link) => (
                    <SideLinkContainer>
                        <IconContainer>
                            <SideLinkIcon src={link.icon} alt="icon" />
                        </IconContainer>
                        <SideLink
                            activeClassName="active"
                            to={link?.url === '/dashboard' ? '/dashboard' : '0'}
                        >
                            {link.name}
                        </SideLink>
                    </SideLinkContainer>
                ))}
            </div>
            <SidebarFooter>
                <img src={ProspaIcon} alt="icon" />
            </SidebarFooter>
        </DashboardSidebarContainer>
    );
};
