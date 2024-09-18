// src/components/Button.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

// Define the metadata for the Button component stories
export default {
  title: 'Components/Button', // This will create a "Button" section in Storybook
  component: Button,
} as Meta;

// Create a template for the Button component stories
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Create a primary Button story
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Button clicked!'),
};

// Create a secondary Button story
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};
