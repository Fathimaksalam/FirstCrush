import { useState } from 'react';
import './App.css'
import Login from './components/login/Login';
import ForgotPassword from './components/password/Password';
import Register from './components/register/Register';

function App() {
  const [page, setPage] = useState("login");
  return (
    <div className="app-container">
      {page === "login" && <Login onNavigate={setPage} />}
      {page === "register" && <Register onNavigate={setPage} />}
      {page === "forgot" && <ForgotPassword onNavigate={setPage} />}
    </div>
  )
}

export default App
