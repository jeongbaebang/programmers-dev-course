import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GetUser from './components/GetUser';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetUser />
    </QueryClientProvider>
  );
}

export default App;
