import React from "react";
import { upperFirst } from "lodash";

const App: React.FC = () => {
  const title = upperFirst("a前台网站");

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
