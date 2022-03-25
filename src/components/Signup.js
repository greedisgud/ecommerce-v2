import React from "react";

const Signup = () => {
  function submitForm() {
    alert("Sucessfully signed up!");
  }
  return (
    <div className="signup">
      <form onSubmit={submitForm} className="signupForm">
        <label htmlFor="Email">Email: </label>
        <input type="email" placeholder="1234@test.com"></input>
        <label htmlFor="pass">Password: </label>
        <input className="passInput" type="password" placeholder="****"></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
