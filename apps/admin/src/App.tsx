import React from "react";
import { capitalize } from "lodash";

const App: React.FC = () => {
  const title = capitalize("a管理后台");

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
