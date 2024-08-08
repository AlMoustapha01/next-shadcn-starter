import { Meta, StoryObj } from '@storybook/react';

import { Example2 } from './example2';

const meta: Meta<typeof Example2> = {
  component: Example2,
};

export default meta;

type Story = StoryObj<typeof Example2>;

export const Default: Story = {
  args: {}
};
