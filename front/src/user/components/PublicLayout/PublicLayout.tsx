import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

const PublicLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;