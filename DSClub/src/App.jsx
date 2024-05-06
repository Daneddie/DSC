import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/www";
import AppPage from "./pages/app";
import HeaderComponent from "./pages/www/header";
import FooterComponent from "./pages/www/footer";

function App() {

    return (
        <main>            

            <Routes>
                <Route path="/" element={<IndexPage />}></Route>
                <Route path="/app" element={<AppPage />}></Route>
            </Routes>

        </main>
    )
}

export default App;
