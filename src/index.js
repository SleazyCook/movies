import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

import App from './App'
import ErrorPage from './containers/ErrorPage'
import Landing from './containers/Landing'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);