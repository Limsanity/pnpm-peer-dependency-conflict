import React from "react";
import { capitalize } from "lodash";
import { formatTitle, addPrefix } from "@my-workspace/web/src/utils/string";
import { Typography, Space, Card } from "antd";

const { Title } = Typography;

const App: React.FC = () => {
  const title = capitalize("a管理后台");
  const formattedTitle = formatTitle(title);
  const finalTitle = addPrefix(formattedTitle, "==>");

  return (
    <Card style={{ margin: 20 }}>
      <Space direction="vertical">
        <Title level={1}>{finalTitle}</Title>
        <Title level={2}>使用 Ant Design</Title>
      </Space>
    </Card>
  );
};

export default App;
