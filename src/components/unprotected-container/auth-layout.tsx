import { AuthLayoutContainer, MainContent } from './auth-layout.style';
import { Sidebar } from '../sidebar';
import { Navbar } from '../navbar';

export const AuthLayout = ({ children }) => {
    return (
        <AuthLayoutContainer>
            <Navbar />
            <Sidebar />
            <MainContent>{children}</MainContent>
        </AuthLayoutContainer>
    );
};
