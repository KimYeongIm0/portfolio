import { createBrowserRouter } from 'react-router-dom';

import MainContents from '../view/MainContents';
import Home from '../view/Home';
import "../css/mainContents.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContents />,
    children: [
      {
        path:'/',
        element:<Home />
      },
    ]
  },
]);

export default router
