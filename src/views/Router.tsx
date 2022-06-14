import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import MainFrame from './MainFrame';

// type Redirection = { path: string; to: string };

// const redirections: Redirection[] = [
//   {
//     path: '/',
//     to: '/datasets',
//   },
// ];
const routes: RouteObject[] = [
  // ...redirections.map(({ path, to }) => ({
  //   path,
  //   element: <Navigate replace to={to} />,
  // })),
  {
    path: '/',
    element: <MainFrame />,
  },
];

function RootRoute() {
  return useRoutes(routes);
}

function Router() {
  return <RootRoute />;
}

export default Router;
