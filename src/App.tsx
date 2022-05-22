import { QueryClientProvider } from 'react-query';
import { getClient } from './api/fetcher';
import AppRouter from './AppRouter';

function App() {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />;
    </QueryClientProvider>
  );
}

export default App;
