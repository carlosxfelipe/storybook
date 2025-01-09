import { ComponentProps } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

type AlertProps = ComponentProps<typeof Alert>;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "Este é um alerta de sucesso!",
  type: "success",
  duration: 3, // em segundos
  position: "top-right",
};

export const Error = Template.bind({});
Error.args = {
  message: "Este é um alerta de erro!",
  type: "error",
  duration: 5,
  position: "bottom-left",
};

export const Info = Template.bind({});
Info.args = {
  message: "Este é um alerta informativo!",
  type: "info",
  duration: 4,
  position: "top-left",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Este é um alerta de aviso!",
  type: "warning",
  duration: 2,
  position: "bottom-right",
};
