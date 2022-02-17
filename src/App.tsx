import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import type {} from 'styled-components/cssprop';
import { Page } from './pages';
import { useAppStore } from './stores/use-app-store';
import { createTheme } from './utils/styped-theme';
import { useForkRem } from './utils/use-fork-rem';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
    },
  },
});

function App() {
  const [store, dispatch] = useAppStore();
  const forkRem = useForkRem({ desW: 375, maxW: 375 });
  const theme = useMemo(() => {
    return createTheme({ forkRem });
  }, [forkRem]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Page store={store} dispatch={dispatch}></Page>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
