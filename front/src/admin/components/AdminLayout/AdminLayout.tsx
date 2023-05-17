import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
    return (
        <>
            <header>Header</header>
            <Outlet />
        </>
    );
};

export default AdminLayout;