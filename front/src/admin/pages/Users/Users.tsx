import React, { useEffect } from 'react';

const Users: React.FC = () => {

    useEffect(() => {
        document.title = 'Пользователи'; // установка заголовка страницы
    }, []);

    return (
        <>
            <h1>Пользователи</h1>
        </>
    );

};

export default Users;