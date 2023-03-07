import React from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

interface ILoader {
    isLoad: boolean;
}
const Layout = <P extends object>(Component: React.ComponentType<P>) => {
    return class Layout extends React.Component<P & ILoader> {
        render(): JSX.Element {
            const { isLoad, ...props } = this.props;
            if (!isLoad) {
                return <Loader />;
            }
            return (
                <>
                    <Navbar {...props} />
                    <Component {...(props as P)} />
                </>
            );
        }
    };
};
export default Layout;
