import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import '../App.scss';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import FormPage from './pages/forms/FormPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
