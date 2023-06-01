import { Routes, Route, Navigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import Header from './components/Header';
import Main from './pages/Main';
import { MAIN_PAGE_PATH } from './utils/constants';

function App() {
    return (
        <Stack gap={5}>
            <Header />
            <Routes>
                <Route path={MAIN_PAGE_PATH} element={<Main />} />
                <Route
                    path="*"
                    element={<Navigate to={MAIN_PAGE_PATH} replace />}
                />
            </Routes>
        </Stack>
    );
}

export default App;
