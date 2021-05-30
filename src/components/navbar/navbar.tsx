import { Link, useLocation } from 'react-router-dom';
import { NavBarContainer } from './navbar.style';

export const Navbar = () => {
    const location = useLocation();

    const navigateTo = location.pathname === '/register' ? '/login' : '/register';

    return (
        <NavBarContainer>
            {navigateTo ? 'Already a member?' : 'Don&apos;t have an account?'}
            <Link href={navigateTo} className="action">
                &nbsp;{navigateTo ? 'Sign In' : 'Sign Up'}
            </Link>
        </NavBarContainer>
    );
};
