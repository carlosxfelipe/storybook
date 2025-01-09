import { ComponentProps, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

type AlertProps = ComponentProps<typeof Alert>;

const Template: StoryFn<AlertProps> = (args) => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <Alert {...args} onClose={() => setVisible(false)} />
  ) : (
    <div />
  );
};

export const Success = Template.bind({});
Success.args = {
  message: "Este é um alerta de sucesso!",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  message: "Este é um alerta de erro!",
  type: "error",
};

export const Info = Template.bind({});
Info.args = {
  message: "Este é um alerta informativo!",
  type: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Este é um alerta de aviso!",
  type: "warning",
};
