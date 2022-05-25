import { Global } from '@emotion/react';
import { QueryClientProvider } from 'react-query';
import { getClient } from './api/fetcher';
import AppRouter from './AppRouter';
import globalCSS from './globalStyle';

function App() {
  const queryClient = getClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalCSS} />
        <AppRouter />;
      </QueryClientProvider>
    </>
  );
}

export default App;
