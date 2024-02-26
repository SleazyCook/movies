import { Outlet } from 'react-router-dom'

import './styles/style.css'

function App() {
    return(
        <div>
            <Outlet context />
        </div>
    )
}

export default App;