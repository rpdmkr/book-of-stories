import React from 'react';
import styled from 'styled-components';
import { color, space, typography, compose, variant, get } from 'styled-system';

// import { theme } from '../constants/theme';

const themeGet = (p = props.theme, path) => get(p, path);

const textProps = compose(color, typography, space);

const textVariants = {
    variants: {
        'overline': {
            fontSize: 0,
            lineHeight: 0,
            letterSpacing: 5,
            fontFamily: 'sansSerif',
        },
        'caption': {
            fontSize: 1,
            lineHeight: 1,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'body1': {
            fontSize: 2,
            lineHeight: 2,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'body2': {
            fontSize: 3,
            lineHeight: 3,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'subheading': {
            fontSize: 4,
            lineHeight: 4,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'h6': {
            fontSize: 5,
            lineHeight: 5,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'h5': {
            fontSize: 6,
            lineHeight: 6,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'h4': {
            fontSize: 7,
            lineHeight: 7,
            letterSpacing: 4,
            fontFamily: 'sansSerif',
        },
        'display1': {
            fontSize: 8,
            lineHeight: 8,
            letterSpacing: 3,
            fontFamily: 'sansSerif',
        },
        'display2': {
            fontSize: 9,
            lineHeight: 9,
            letterSpacing: 2,
            fontFamily: 'sansSerif',
        },
        'display3': {
            fontSize: 10,
            lineHeight: 9,
            letterSpacing: 1,
            fontFamily: 'sansSerif',
        },
        'display4': {
            fontSize: 10,
            lineHeight: 9,
            letterSpacing: 2,
            fontFamily: 'sansSerif',
        }
    }
};


export const Text = styled.div`
${textProps}
${variant(textVariants)}
`;

Text.defaultProps = {
    variant: 'body1',
}


export default Text;

