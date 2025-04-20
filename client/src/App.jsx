import { BrowserRouter, Route, Routes } from 'react-router';
import Notfound from "./pages/Notfound";
import LandingAuth from "./pages/LandingAuth";
import ChatsLayout from '../layouts/ChatsLayout';
import ChatPage from './pages/ChatPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingAuth />} />
        <Route path="/user" element={<ChatsLayout />} >
          <Route path="chats" element={<ChatPage />} />
          <Route path="friends" element={<h1>Contacts</h1>} />
          <Route path="groups" element={<h1>Groups</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
