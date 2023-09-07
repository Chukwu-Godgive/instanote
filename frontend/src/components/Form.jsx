import React, { useState } from 'react';

export default function LoginForm() {
  //  Defining state variables
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');

  // Defining event handlers
  const handleClick = () => {
    setIsRegistered((prevIsRegistered) => !prevIsRegistered);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    // handling submit button
  };

  // Rendering the states
  return (
    <div>
      <h2> {isRegistered ? 'Login' : 'Register'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">{isRegistered ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isRegistered ? 'Not registered yet?' : 'Already have an account?'}
        <button type="button" onClick={handleClick}>
          {isRegistered ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}



