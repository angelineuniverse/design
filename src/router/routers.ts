import { createBrowserRouter } from "react-router-dom";
import Menu from "./menu";
const router = createBrowserRouter([
    {
        path: '',
        async lazy() {
            let App = await import('../App');
            return { Component: App.default };
        },
        children: Menu
    }
]);


export default router;