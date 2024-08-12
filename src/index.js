import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Layout from './components/Layout';
import ErrorPage from"./pages/ErrorPage";

import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserProfile from "./pages/UserProfile"
import Authors from "./pages/Authors"
import CreatePost from "./pages/CreatePost"
import CategoryPosts from "./pages/CategoryPosts"
import Logout from "./pages/Logout"
import AuthorPosts from "./pages/AuthorPosts"
import Dashboard from "./pages/Dashboard"
import EditPost from "./pages/EditPost"





const router = createBrowserRouter([
  {
     path:"/",
     element:<Layout/>,
     errorElement: <ErrorPage/>,
     children:[
      {index:true, element:<Home/>},
      {path: "posts/:id", element: <PostDetail/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile", element: <UserProfile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "posts/category/:category", element: <CategoryPosts/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "logout", element: <Logout/>},
      {path: "posts/:id/edit", element: <EditPost/>},
     ]
     
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

