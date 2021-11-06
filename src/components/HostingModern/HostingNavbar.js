import React from 'react'
import Sticky from 'react-stickynode';
import Navbar from '../../containers/HostingModern/Navbar';
import { DrawerProvider } from '../../containers/HostingModern/common/contexts/DrawerContext';

export default function MDXNavbar() {
    return (
        <div>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                    <Navbar />
                </DrawerProvider>
            </Sticky>  
        </div>
    )
}
