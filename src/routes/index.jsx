import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main";



const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>
        
    },
    {
        path:'/log in',
        element:'loge in'
    }
   
])
export default routes;