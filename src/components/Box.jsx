import React from 'react';
import { styled } from 'styled-components';
import { color, layout, space, border, position, background, shadow, compose } from 'styled-system';

const boxProps = compose(color, layout, space, border, position, background, shadow);

export const Box = styled.div`
    {
      boxSizing: 'border-box',
      minWidth: 0,
    },
    ${boxProps}
`

export default Box;
