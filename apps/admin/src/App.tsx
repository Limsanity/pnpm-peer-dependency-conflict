import React from "react";
import { capitalize } from "lodash";
import { formatTitle, addPrefix } from "@my-workspace/web";

const App: React.FC = () => {
  const title = capitalize("a管理后台");
  const formattedTitle = formatTitle(title);
  const finalTitle = addPrefix(formattedTitle, "==>");

  return (
    <div>
      <h1>{finalTitle}</h1>
    </div>
  );
};

export default App;
