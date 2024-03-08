import { Routes,Route, Navigate } from "react-router-dom"

import Layout from "./layout/layout"
import HomePage from "./page/HomePage";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="/USER-PROFILE" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>
    )
}
export default AppRoutes;