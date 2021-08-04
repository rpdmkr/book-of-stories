import React from 'react';

import { Text } from '../src/components/Text';

export default {
    title: 'Components/Text',
    component: Text,
};

export const TestStory = () => (<>
    <Text variant="display2">Hello there!</Text>
    <Text variant="display1" color="reds.0">Hello there! Display1</Text>
    <Text variant="display2" color="green" >Hello there! Display 2</Text>
</>);

// export const TextDisplay1 = () =>
// export const TextDisplay2 = () =>


// const Template = (args) => (<><Text {...args} >Display3</Text></>);

// export const TextStory = () => (
//     <>
//         <Text>Something</Text>
//     </>
// );

// TextStory.story = {
//     title: 'Components/Text',
//     component: Text,
// };

// export const TextDisplay = Template.bind({});
// TextDisplay.args = {
//     variant: 'display3'
// };

