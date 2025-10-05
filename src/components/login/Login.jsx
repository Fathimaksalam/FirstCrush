import "./Login.css";

function Login({ onNavigate }) {
  return (
    <div className="login-card">
      <img src="/firstCrush.jpg" alt="First Crush Logo" className="login-logo" />
      <h2>Welcome to First Crush</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>
        New here?{" "}
        <span onClick={() => onNavigate("register")} className="link">Register</span>
      </p>
      <p onClick={() => onNavigate("forgot")} className="link">
        Forgot Password?
      </p>
    </div>
  );
}

export default Login;
