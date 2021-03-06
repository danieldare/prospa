/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import { AuthLayout } from 'src/components/unprotected-container';
import Login from 'src/pages/auth/login';
import Register from 'src/pages/auth/register';
import OpenAccount from 'src/pages/auth/open-account';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { Dashboard } from 'src/pages/dashboard/dashboard';

export const UnProtectedRoute: FC<RouteProps> = ({ ...rest }: RouteProps) => {
    return (
        <AuthLayout>
            <Route {...rest} />
        </AuthLayout>
    );
};

export const ProtectedRoute: FC<RouteProps> = ({ ...rest }: RouteProps) => {
    return (
        <DashboardLayout>
            <Route {...rest} />
        </DashboardLayout>
    );
};

const Routes: FC<RouteProps> = () => (
    <Switch>
        <UnProtectedRoute path="/" component={Register} exact />
        <UnProtectedRoute path="/login" component={Login} exact />
        <UnProtectedRoute path="/open-account" component={OpenAccount} exact />
        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
    </Switch>
);

export default Routes;
