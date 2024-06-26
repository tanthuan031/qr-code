import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { handleGetMeClient } from '../../adapter/auth';
import { deleteCookieClient, getCookiesClient } from '../../api/Client/Auth';
import { ClientLayout } from '../../layouts/Client';
import { ClientHistoryPermissionPage } from '../../pages/Client/HistoryAskPermission';
import { ClientOverviewPage } from '../../pages/Client/OverviewPage';
import { ClientProfilePage } from '../../pages/Client/ProfilePage';
import { LoginPage } from '../../pages/Common/Auth/LoginPage';
import { RegisterPage } from '../../pages/Common/Auth/RegisterPage';
import { setIsLoginClient, setUserClient } from '../../redux/reducer/auth/auth.reducer';
import { ClientProtectedRoutes } from '../ProtectedRouter/client';

export default function ClientRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    handleGetMeClient().then((result) => {
      if (result === 401) {
        const token = getCookiesClient('tokenClient');
        dispatch(setIsLoginClient(false));

        if (token) {
          deleteCookieClient('tokenClient');
        }
      } else {
        // dispatch(setIsLoginClient(true));
        dispatch(setUserClient(result));
      }
    });
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/location" element={<ClientLayout slot={<Location role={1} />} />} /> */}
      <Route element={<ClientProtectedRoutes />}>
        <Route path="/" element={<ClientLayout slot={<ClientOverviewPage role={1} />} />} />
        <Route path="/history" element={<ClientLayout slot={<ClientHistoryPermissionPage role={1} />} />} />
        <Route path="/profile" element={<ClientLayout slot={<ClientProfilePage role={1} />} />} />
      </Route>
    </Routes>
  );
}
