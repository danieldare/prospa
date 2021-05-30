import { DashboardLayoutContainer, DasboardMainContent } from './dashboard-layout.style';
import { DashboardSidebar } from '../dasboard-sidebar/dashboard-sidebar';
import { DashboardNavbar } from '../dashboard-navbar';

export const DashboardLayout = ({ children }) => {
    return (
        <DashboardLayoutContainer>
            <DashboardNavbar />
            <DashboardSidebar />
            <DasboardMainContent>{children}</DasboardMainContent>
        </DashboardLayoutContainer>
    );
};
