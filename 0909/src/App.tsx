import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Root from './components/Root';
import ProductItem from './components/ProductItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/product/:id', element: <ProductItem /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
