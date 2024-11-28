import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Login from "./components/Login";



const Routes = () => {
    return (
        <ReactRoutes>
            <Route
                path="/"
                element={
                    <Layout >
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/login"
                element={
                    <Layout >
                        <Login />
                    </Layout>
                }
            />


        </ReactRoutes>

    )
}

export default Routes
