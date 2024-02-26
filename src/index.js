import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './containers/ErrorPage'

import Landing from './containers/Landing'

import LogOn from './containers/LogOn'
import Profile from './containers/Profile'
import EditProfile from './containers/EditProfile'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'authenticate',
                element: <LogOn />
            },
            {
                path: 'user',
                element: <Profile />
            },
            {
                path: 'edit',
                element: <EditProfile />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);