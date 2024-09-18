import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button', // This will create a "Button" section in Storybook
  component: Button,
} as Meta;

//template for the Button component stories
const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
}

// primary Button story
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

//secondary Button story
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Icon Left',
  icon: <span>🌟</span>,
  iconPosition: 'left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Icon Right',
  icon: <span>🌟</span>,
  iconPosition: 'right',
};