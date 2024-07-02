// stories/MyButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import LoadingButton from "./LoadingButton";

const meta = {
  title: "components/LoadingButton",
  component: LoadingButton,
} satisfies Meta<typeof LoadingButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Click',
    onPress: () =>{},
    activityIndicatorColor: "#ff0000",
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    onPress: () =>{},
    isLoading: true,
    activityIndicatorColor: "#ff0000",
  },
};
