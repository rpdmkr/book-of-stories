import React from 'react';

import { Text } from '../src/components/Text';

export default {
    title: 'Components/Typography',
    component: Text,
};

export const TextVariants = () => (<>
    <Text variant="overline">Hello there! overline</Text>
    <Text variant="caption">Hello there! caption</Text>
    <Text variant="body1">Hello there! body1</Text>
    <Text variant="body2">Hello there! body2</Text>
    <Text variant="subheading">Hello there! subheading</Text>
    <Text variant="h6">Hello there! H6</Text>
    <Text variant="h5">Hello there! H5</Text>
    <Text variant="h4">Hello there! H4</Text>
    <Text variant="display1">Hello there! Display1</Text>
    <Text variant="display2">Hello there! Display2</Text>
    <Text variant="display3">Hello there! Display 3</Text>
    <Text variant="display4" >Hello there! Display 4</Text>
    <Text >Default text</Text>
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

