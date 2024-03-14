import { Routes,Route, Navigate } from "react-router-dom"

import Layout from "./layout/layout"
import HomePage from "./page/HomePage";
import AuthCallbackPage from "./page/AuthCallbackPage";
import UserProfilePage from "./page/UserProfilePage";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage/></Layout>}/>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>
    )
}
export default AppRoutes;