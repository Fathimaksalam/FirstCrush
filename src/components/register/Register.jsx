
import "./Register.css";

function Register({ onNavigate }) {
  return (
    <div className="register-card">
      <h2>Create Account</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <p>
        Already have an account?{" "}
        <span onClick={() => onNavigate("login")} className="link">Login</span>
      </p>
    </div>
  );
}

export default Register;
