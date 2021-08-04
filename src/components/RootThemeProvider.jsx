import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const RootThemeProvider = ({ theme, children }: Props) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default RootThemeProvider;
