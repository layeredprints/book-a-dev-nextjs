import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import nlBE from 'src/translations/nl-NL/index.json';
import enUS from 'src/translations/en-US/index.json';
import { useTheme } from 'src/hooks/useTheme';

const queryClient = new QueryClient();

interface Props {
  Component: React.FC;
  pageProps: any;
}

const App = (props: Props): JSX.Element => {
  const { Component, pageProps } = props;

  const { locale } = useRouter();
  const { theme } = useTheme();

  i18n.use(initReactI18next).init({
    resources: {
      ['en-US']: {
        translation: enUS,
      },
      ['nl-BE']: {
        translation: nlBE,
      },
    },
    lng: locale,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
