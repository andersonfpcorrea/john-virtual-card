import { Button, Input, Space, Typography } from "antd";

interface IHomeProps {
  testId?: string;
}

export function Home({ testId = "" }: IHomeProps): JSX.Element {
  return (
    <Space
      direction="vertical"
      size="large"
      data-testid={`home-${testId}`}
      style={{ padding: "3rem 4rem" }}
    >
      <Typography.Title data-testid={`home-title-${testId}`}>
        QR Code Image Generator
      </Typography.Title>
      <Space direction="vertical" size="middle">
        <Input
          addonBefore="Name"
          placeholder="John"
          size="large"
          type="text"
          data-testid={`home-input-name-${testId}`}
        />
        <Input
          addonBefore="Linkedin URL"
          placeholder="https://www.linkedin.com/john"
          size="large"
          type="text"
          data-testid={`home-input-linkedin-${testId}`}
        />
        <Input
          addonBefore="Github URL"
          placeholder="https://www.github.com/john"
          size="large"
          type="text"
          data-testid={`home-input-github-${testId}`}
        />
      </Space>
      <Button size="large" type="primary" data-testid={`home-button-${testId}`}>
        Generate Image
      </Button>
    </Space>
  );
}
