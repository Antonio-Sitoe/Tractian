import React from 'react';
import { Route, Routes } from 'react-router';
import Users from './Users';
import Page404 from '../Page404/Page404';
import UserEdit from './UserEdit';

function User() {
  return (
    <Routes>
      <Route path='' element={<Users />} />
      <Route path='edit/:id' element={<UserEdit />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default User;
