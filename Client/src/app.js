import { createRoot } from "react-dom/client"
import Main from "./Main"
import 'bootstrap/dist/css/bootstrap.min.css'

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import darkModeReducer from "./features/Global"

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})

createRoot(document.getElementById('root')).render(<Provider store={store}>
    <Main/>
</Provider>)