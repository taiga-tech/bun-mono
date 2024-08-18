import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { bannerTypeClasses } from '../styles';
import { NotificationBannerIcon } from './Icon';

const meta = {
  title: 'Component/DADS v2/NotificationBanner/Parts/Icon',
  component: NotificationBannerIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerIcon はノティフケーションバナーのバナーアイコンに使用します。NotificationBanner コンポーネントに内包されているため、単体で使う必要はありません。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    (Story, context) => {
      return (
        <div className={bannerTypeClasses[context.args.type]}>
          <Story />
        </div>
      );
    },
  ],
  args: {
    type: 'info1',
  },
};
