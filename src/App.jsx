import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import DocumentList from './pages/DocumentList';
import About from './pages/About';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import SinglePageError from './pages/SinglePageError';
import DocumentPages from './pages/DocumentPages';
import SearchForm from './pages/SearchForm';
import { loader as documentsLoader } from './pages/DocumentList';
import { loader as pagesLoader } from './pages/DocumentPages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import User from './pages/User';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/user/verify-email',
        element: <User />,
      },
      {
        path: '/',
        element: <ProtectedPage />,
        children: [
          {
            index: true,
            element: <DocumentList />,
            loader: documentsLoader(queryClient),
            errorElement: <SinglePageError />,
          },
          {
            path: '/:id',
            element: <DocumentPages />,
            loader: pagesLoader(queryClient),
            errorElement: <SinglePageError />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
