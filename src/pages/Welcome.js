import React from "react";
import { Route } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h4>Welcome new user... how r u doing !</h4>
      </Route>
    </section>
  );
}

export default Welcome;
