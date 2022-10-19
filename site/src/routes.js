import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import VirtualRoom from './pages/VirtualRoom/VR';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/virtual_room' element={<VirtualRoom />} />
        </Routes>
    )
}

export default MainRoutes;