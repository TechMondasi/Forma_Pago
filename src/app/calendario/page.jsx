"use client"

import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/edinrandal98" />
    </div>
  );
};

export default App;