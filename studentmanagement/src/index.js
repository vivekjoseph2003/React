import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import router from "./router";
import AutoLogin from "./components/auth/AutoLogin";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <AutoLogin>
            <RouterProvider router={router}/>
        </AutoLogin>
    </Provider>
);