import React, {ReactNode} from 'react';
import MenuList from "component/Menu";

interface LayoutProps {
    children : ReactNode
}
const Layout = ({children} : LayoutProps) => {
    return (
        <div>
            <div className="layout">
                {children}
                <MenuList/>
            </div>
        </div>
    );
};

export default Layout;