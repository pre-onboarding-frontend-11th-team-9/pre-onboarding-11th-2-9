import { Navigate, RouteObject } from "react-router-dom";
import IssueDetailPage from "../pages/IssueDetailPage";
import IssueListPage from "../pages/IssueListPage";
import { Layout } from "../components/layout/Layout";
import NotFound from "../components/not-found/NotFound";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/issues"} />,
      },
      {
        path: "/issues",
        element: <IssueListPage />,
      },
      {
        path: "/issues/:id",
        element: <IssueDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
