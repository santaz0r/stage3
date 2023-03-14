import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import '../App.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/homePage/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
