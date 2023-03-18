import { Button, Input, Space, Typography } from "antd";
import { Modal } from "../../components";
import { useQrCode } from "../../hooks";

interface IHomeProps {
  testId?: string;
}

export function Home({ testId = "" }: IHomeProps): JSX.Element {
  const { handleSubmit, handleModalCancel, isModalOpen, value, name } =
    useQrCode();
  return (
    <form onSubmit={handleSubmit}>
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
            name="name"
            required
            data-testid={`home-input-name-${testId}`}
          />
          <Input
            addonBefore="Linkedin URL"
            placeholder="https://www.linkedin.com/john"
            size="large"
            type="text"
            name="linkedin"
            required
            data-testid={`home-input-linkedin-${testId}`}
          />
          <Input
            addonBefore="Github URL"
            placeholder="https://www.github.com/john"
            size="large"
            type="text"
            name="github"
            required
            data-testid={`home-input-github-${testId}`}
          />
        </Space>
        <Button
          size="large"
          type="primary"
          data-testid={`home-button-${testId}`}
          htmlType="submit"
        >
          Generate Image
        </Button>
        {value === undefined || name === undefined ? null : (
          <Modal
            value={value}
            isModalOpen={isModalOpen}
            handleCancel={handleModalCancel}
            name={name}
          />
        )}
      </Space>
    </form>
  );
}
