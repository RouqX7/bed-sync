import React from 'react';
import { Link } from 'react-router-dom';

function LoginChoicePage() {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>Choose an option to proceed:</p>
      <Link to="/auth">Log In as Admin</Link> <br />
      <Link to="/auth">Log In as Staff</Link> <br />
      <Link to="/auth/signup">Register</Link>
    </div>
  );
}

export default LoginChoicePage;
