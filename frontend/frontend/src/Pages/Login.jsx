import Button from "../Components/Button";
import Input from "../Components/Input";
import "./Login.css"; // CSS file import ki hai

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        
        <Input
          type="email"
          placeholder="Enter your Email"
        />

        <Input
          type="password"
          placeholder="Enter your Password"
        />

        <Button type="submit">Login</Button>
      </div>
    </div>
  );
}

export default Login;