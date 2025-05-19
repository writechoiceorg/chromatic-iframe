import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SubAccount from './components/smart-wallet/SubAccount';


const meta = {
  title: 'OnchainKit/SubAccount',
  component: SubAccount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSubAccount: Story = {
  name: 'SubAccount',
  render: () => <SubAccount />,
};
