import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import { Sample } from './Sample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Welcome/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tester: 'Guti',
  color: 'green'
};
