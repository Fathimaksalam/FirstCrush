
import "./Password.css";

function ForgotPassword({ onNavigate }) {
  return (
    <div className="forgot-card">
      <h2>Reset Password</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Send Reset Link</button>
      <p onClick={() => onNavigate("login")} className="link">
        Back to Login
      </p>
    </div>
  );
}

export default ForgotPassword;
