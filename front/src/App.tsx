import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// HOC проверяет аутентификацию пользователя
import RequireAuth from './user/hoc/RequireAuth';
// контекстный компонент, который предоставляет информацию об аутентификации (токен пользователя) через контекст
import AuthProvider from './user/hoc/AuthProvider';

import PublicLayout from './user/components/PublicLayout/PublicLayout';
import Home from './user/pages/Home/Home';
import Contacts from './user/pages/Contacts/Contacts';
import Faq from './user/pages/Faq/Faq';
import Agreement from './user/pages/Agreement/Agreement';
import Contract from './user/pages/Contract/Contract';
import Register from './user/pages/Register/Register';
import Login from './user/pages/Login/Login';
import Forgot from './user/pages/Forgot/Forgot';
import Profile from './user/pages/Profile/Profile';
import NotFound from './user/pages/NotFound/NotFound'; // страница 404 

import AdminLayout from './admin/components/AdminLayout/AdminLayout';
import Users from './admin/pages/Users/Users';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App dark:bg-gray-900">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="faq" element={<Faq />} />
              <Route path="agreement" element={<Agreement />} />
              <Route path="contract" element={<Contract />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<Forgot />} />
              <Route path="profile" element={
                <RequireAuth><Profile /></RequireAuth>
              } />
              <Route path="*" element={<NotFound />} /> {/* страница 404  */}
            </Route>
            <Route path="/admin/" element={<AdminLayout />}>
              <Route path="users" element={
                <RequireAuth><Users /></RequireAuth>
              } />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
