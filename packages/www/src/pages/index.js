import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

export default props => (
<Layout>
  <Header>Header</Header>
  <Content>
    <Title>TIL</Title>
  </Content>
</Layout>
);
