import React from "react";
import { upperFirst } from "lodash";
import { Typography, Space, Card } from "antd";

const { Title } = Typography;

const App: React.FC = () => {
  const title = upperFirst("a前台网站");

  return (
    <Card style={{ margin: 20 }}>
      <Space direction="vertical">
        <Title level={1}>{title}</Title>
        <Title level={2}>使用 Ant Design</Title>
      </Space>
    </Card>
  );
};

export default App;
