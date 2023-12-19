import React, {ReactNode} from 'react';

interface LayoutProps {
    children : ReactNode
}
const Layout = ({children} : LayoutProps) => {
    return (
        <div>
            <div className="layout">{
                children
            }</div>
        </div>
    );
};

export default Layout;