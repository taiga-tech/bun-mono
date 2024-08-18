import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '..';
import { NotificationBanner } from './NotificationBanner';
import { NotificationBannerBody } from './parts/Body';
import { NotificationBannerClose } from './parts/Close';
import { NotificationBannerHeader } from './parts/Header';
import { NotificationBannerHeading } from './parts/Heading';

const meta = {
  title: 'Component/DADS v2/NotificationBanner',
  component: NotificationBanner,
  tags: ['autodocs'],
  argTypes: {
    bannerStyle: {
      options: ['standard', 'color-chip'],
      control: { type: 'radio' },
      description: 'ノティフケーションバナーのスタイルを選択します。',
      table: {
        type: { summary: "'standard' | 'color-chip'" },
      },
    },
    type: {
      options: ['info1', 'info2', 'warning', 'error', 'success'],
      control: { type: 'radio' },
      description: 'ノティフケーションバナーで通知する情報属性の種類を選択します。',
      table: {
        type: { summary: "'info1' | 'info2' | 'warning' | 'error' | 'success'" },
      },
    },
  },
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    bannerStyle: 'standard',
    type: 'info2',
    children: (
      <>
        <NotificationBannerHeader>
          <NotificationBannerHeading level='h2'>バナータイトル</NotificationBannerHeading>
        </NotificationBannerHeader>
        <NotificationBannerBody>
          <p>
            <time dateTime='2024-07-01'>2024年7月1日</time>
          </p>
          <p className='mt-2'>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </p>
        </NotificationBannerBody>
      </>
    ),
  },
};

export const StandardWithClose = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='standard' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithClose = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='color-chip' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
            <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const StandardWithButton = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='standard' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-solid-grey-800 hover:text-solid-grey-900 hover:bg-solid-grey-200 active:!text-black active:bg-solid-grey-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-solid-grey-800 hover:bg-solid-grey-900 active:!bg-black'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-error-1 hover:bg-red-1000 active:bg-red-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-success-2 hover:bg-green-1000 active:bg-green-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithButton = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='color-chip' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-solid-grey-800 hover:text-solid-grey-900 hover:bg-solid-grey-200 active:text-black active:bg-solid-grey-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-solid-grey-800 hover:bg-solid-grey-900 active:bg-black'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-error-1 hover:bg-red-1000 active:bg-red-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-success-2 hover:bg-green-1000 active:bg-green-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const StandardWithButtonMobileHoriz = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='standard' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-solid-grey-800 hover:text-solid-grey-900 hover:bg-solid-grey-200 active:text-black active:bg-solid-grey-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-solid-grey-800 hover:bg-solid-grey-900 active:bg-black desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-error-1 hover:bg-red-1000 active:bg-red-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='standard' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-success-2 hover:bg-green-1000 active:bg-green-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithButtonMobileHoriz = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner bannerStyle='color-chip' type='info1'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='info2'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-solid-grey-800 hover:text-solid-grey-900 hover:bg-solid-grey-200 active:text-black active:bg-solid-grey-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-solid-grey-800 hover:bg-solid-grey-900 active:bg-black desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='warning'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-error-1 hover:bg-red-1000 active:bg-red-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner bannerStyle='color-chip' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-success-2 hover:bg-green-1000 active:bg-green-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};
