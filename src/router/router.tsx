import React, {FC, ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {IndexPage} from "../pages/index";

const Router: FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
