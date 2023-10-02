import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Style from "../Pages/Style/Style";
import AllPages from "../Pages/AllPage/AllPages";
import Posts from "../Pages/Shared/Posts/Posts";
import Post from "../Pages/Shared/Posts/Post";
import AuthorDetails from "../Pages/Shared/Authors/AuthorDetails";
import Authors from "../Pages/Shared/Authors/Authors";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PaginationPost from "../Pages/Home/PaginationPost/PaginationPost";



export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Main />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/style',
        element: <Style />
      },
      {
        path: '/pages',
        element: <AllPages />
      },
      {
        path: '/paginat',
        element: <PaginationPost />
      },
      {
        path: '/author',
        element: <Authors />
      },
      {
        path: 'author/:id',
        element: <AuthorDetails />
      },
      {
        path: '/category/:id',
        element: <Posts />
      },
      {
        path: '/blog/:id',
        element: <Post />
      }

    ]
  },
]);