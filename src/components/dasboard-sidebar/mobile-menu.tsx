import styled from 'styled-components';
import InvoiceIcon from 'src/assets/img/accountIcon.png';
import ItemIcon from 'src/assets/img/sparkle.png';
import Logo from 'src/assets/img/prospa2.svg';
import CaretDown from 'src/assets/img/caret.png';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors?.white};
    color: ${({ theme }) => theme.colors?.grey01};
    width: 80%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2em;
    font-size: 14px;
    box-shadow: 0 2px 22px rgba(131, 151, 171, 0.24);
    white-space: nowrap;
    overflow: hidden;

    .dashed-border {
        margin-top: 3em;
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name-account {
        margin-left: 1.5em;
        font-weight: 600;
        font-size: 1.6rem;
    }

    .business-name {
        color: ${({ theme }) => theme.colors.purpleShade02};
        font-size: 1.6rem;
    }

    .manage-account {
        font-weight: 400;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.skyBlueShade};
    }
`;
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const UserCircle = styled.div`
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

export const DropdownBtn = styled.div`
    background-color: ${({ theme }) => theme.colors?.grey02};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(131, 151, 171, 0.32);
    border-radius: 4px;
    position: absolute;
    top: 6em;
    left: 12px;
    width: 85%;

    .add-business {
        color: ${({ theme }) => theme.colors?.pinkShade};
        cursor: pointer;
        padding: 1.3em;
        padding-top: 0;
        font-size: 11px;
    }
`;

export const DropdownItem = styled.div`
    padding: 1.3em;
    font-size: 13px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.skyBlueShade};

    &.active {
        color: ${({ theme }) => theme.colors?.purpleDark};
    }

    &.has-border {
        border-bottom: 2px solid ${({ theme }) => theme.colors?.grey03};
    }
`;

// Sidebar Item start

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    cursor: pointer;
    margin-bottom: 1.8em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.skyBlueShade};
`;

const Text = styled.div`
    margin-left: 1em;
`;
const SidebarMain = styled.div`
    width: 100%;
`;

const SideBarItems = styled.div`
    margin-top: 2em;
`;

interface ISideBarItemProps {
    text: string;
    image?: string;
}

const SideBarItem = ({ text, image }: ISideBarItemProps) => (
    <ItemWrapper>
        <img src={image || ItemIcon} alt={text} />
        <Text>{text}</Text>
    </ItemWrapper>
);

SideBarItem.defaultProps = {
    image: '',
};

// End of sidebar Item

// MobileMenu, default export

type IProps = {
    openSideDrawer: boolean;
    onCloseSideDrawer: () => void;
    onOverlayClick: () => void;
};

const MobileMenu = ({ openSideDrawer, onCloseSideDrawer, onOverlayClick }: IProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownMenu = useRef<HTMLDivElement>(null);
    const dropdownButton = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: Event) => {
        if (
            dropdownMenu.current &&
            dropdownButton.current &&
            !dropdownMenu.current.contains(e.target as Node) &&
            !dropdownButton.current.contains(e.target as Node)
        ) {
            setShowDropdown(false);
        }
    };

    const toggleDropDown = () => setShowDropdown((prevState) => !prevState);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    }, []);

    return (
        <Modal
            open={openSideDrawer}
            onClose={onCloseSideDrawer}
            animationDuration={150}
            closeOnEsc
            showCloseIcon={false}
            onOverlayClick={onOverlayClick}
            closeOnOverlayClick
            blockScroll
            classNames={{
                modal: 'SideDrawer-modal',
                overlay: 'SideDrawer-overlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
            }}
        >
            <Wrapper>
                <SidebarMain>
                    <UserInfoContainer>
                        <UserInfo>
                            <UserCircle>BN</UserCircle>
                            <div className="name-account">
                                <p className="business-name">Clayvant Inc</p>
                                <p className="manage-account">Manage account</p>
                            </div>
                        </UserInfo>
                        <DropdownBtn onClick={toggleDropDown} ref={dropdownButton}>
                            <img src={CaretDown} alt="dropdown button" />
                        </DropdownBtn>
                    </UserInfoContainer>

                    {showDropdown && (
                        <Dropdown ref={dropdownMenu}>
                            <DropdownItem className="active has-border">Clayvant Inc</DropdownItem>
                            <DropdownItem className="has-border">Business name 2</DropdownItem>
                            <DropdownItem>Business name 3</DropdownItem>
                            <div className="add-business">Add a business</div>
                        </Dropdown>
                    )}

                    <SideBarItems>
                        <SideBarItem text="invoice" image={InvoiceIcon} />
                        <SideBarItem text="management" />
                        <SideBarItem text="security" />
                        <SideBarItem text="support" />
                        <SideBarItem text="settings" />
                        <SideBarItem text="privacy" />
                    </SideBarItems>
                </SidebarMain>
                <div>
                    <img src={Logo} alt="prospa-logo" />
                </div>
            </Wrapper>
        </Modal>
    );
};

export default MobileMenu;
