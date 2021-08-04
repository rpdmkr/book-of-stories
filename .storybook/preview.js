import { RootThemeProvider } from '../src/components/RootThemeProvider';
import { theme } from '../src/constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  //   const theme = defaultTheme;
  return (
    <RootThemeProvider theme={theme}>
      <h1>Themed</h1>
      <Story {...context} />
    </RootThemeProvider>
  );
};

export const decorators = [withThemeProvider];
