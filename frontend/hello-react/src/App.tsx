
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import { ROUTES } from './enums/routes.enum';
import CounterPage from './pages/counter.page';
import HomePage from './pages/home.page';
import NotFoundPage from './pages/not-found.page';
import UsersPage from './pages/user.page';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
        <Route path={ROUTES.COUNTER} element={<CounterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
