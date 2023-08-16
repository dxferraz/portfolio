import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// pages imports
import HomePage from './pages/home/home';
import ContactPage from './pages/contact/Contact';
import ProjectsPage from './pages/projects/Projects';
import ErrorPage from './pages/404/404';
import SkillsPage from './pages/skills/Skills';

// styles
import './normalize.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contato',
        element: <ContactPage />,
      },
      {
        path: '/projetos',
        element: <ProjectsPage />,
      },
      {
        path: '/habilidades',
        element: <SkillsPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)