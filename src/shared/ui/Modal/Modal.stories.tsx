import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Значимость этих проблем настолько очевидна, что курс на социально-ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании направлений прогрессивного развития?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Значимость этих проблем настолько очевидна, что курс на социально-ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании направлений прогрессивного развития?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
