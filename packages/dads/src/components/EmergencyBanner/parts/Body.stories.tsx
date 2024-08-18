import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmergencyBannerBody } from './Body';

const meta = {
  title: 'Component/DADS v2/EmergencyBanner/Parts/Body',
  component: EmergencyBannerBody,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'EmergencyBannerBody は緊急時バナーのコンテンツ領域に使用します。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBannerBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <EmergencyBannerBody>
        <div className='flex flex-col gap-2 desktop:gap-4'>
          <p className='text-std-16N-7'>年月日</p>
          <p className='text-std-16N-7 desktop:text-std-20N-5'>バナーデスクリプション</p>
        </div>
      </EmergencyBannerBody>
    );
  },
};
