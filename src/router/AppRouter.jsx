import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Footer, NavBar } from '../ui/components';

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
};
