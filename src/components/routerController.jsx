import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Resume } from '../pages/Resume'

const appRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Resume />}>
                    <Route index ele/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}