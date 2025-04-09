import ChatPage from "./pages/ChatPage";
import LandingAuth from "./pages/landingAuth"
import { BrowserRouter, Route, Routes } from 'react-router';
import Notfound from "./pages/Notfound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingAuth />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
