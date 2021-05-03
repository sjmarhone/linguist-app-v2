import React from "react";
import Translator from "./Translator";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Translator />
      </div>
    </div>
  );
};

export default Home;
