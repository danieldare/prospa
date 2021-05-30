/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactComponent as SideBarImage } from 'src/assets/img/sidebar-img.svg';
import { ReactComponent as BrandIcon } from 'src/assets/img/prospa.svg';
import { useEffect, useState } from 'react';
import {
    SidebarContainer,
    SidebarFooter,
    ProgressContainer,
    TitleText,
    BriefText,
    HorizontalProgressContainer,
    ProgressDataImage,
} from './sidebar.style';

const sidebarData = [
    {
        title: 'Pay and get Paid',
        brief: 'Make local and international transfers. Receive bank transfers directly into your Prospa account.',
        color: 'red',
    },
    {
        title: 'Business bank account',
        brief: 'A modern bank account for your business in minutes ',
        color: 'blue',
    },
    {
        title: 'Create multiple sub-accounts',
        brief: 'Organise your business finances easily with customizable sub accounts.',
        color: 'yellow',
    },
    {
        title: 'Instant invoicing.',
        brief: ' Create, send and manage invoices directly from your account.  ',
        color: 'green',
    },
    {
        title: 'Integrate and collaborate and ',
        brief: ' Connect your favourite managements tools in a few clicks',
        color: 'voilent',
    },
];

const ProgressData = ({ currentData }) => (
    <>
        <TitleText>Create mulitple sub-account</TitleText>
        <BriefText>
            Organise your business finances easily with multiple accounts. No time
        </BriefText>
        <ProgressDataImage>
            <SideBarImage />
        </ProgressDataImage>
    </>
);

const HorizontalProgress = () => {
    return <HorizontalProgressContainer />;
};

export const Sidebar = () => {
    const [currentData, setCurrentData] = useState({});

    useEffect(() => {
        setCurrentData(sidebarData[0]);
    }, []);

    return (
        <SidebarContainer>
            <BrandIcon />
            <ProgressContainer>
                <ProgressData currentData={currentData} />
                {sidebarData.map((data, index) => (
                    <HorizontalProgress />
                ))}
            </ProgressContainer>
            <SidebarFooter>2021 Prospa Inc</SidebarFooter>
        </SidebarContainer>
    );
};
