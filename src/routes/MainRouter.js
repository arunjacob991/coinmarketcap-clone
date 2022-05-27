import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const MainRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/yoyo"
                element={<Home />}
            />
        </Routes>
    );
};

export default MainRouter;
