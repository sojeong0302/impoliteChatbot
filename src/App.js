import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.js";
import ChatPage from "./pages/ChatPage/ChatPage.js";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/chat' element={<ChatPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
