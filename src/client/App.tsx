import {BrowserRouter, Navigate, Routes} from 'react-router-dom';

import {InfoSnackbar} from './components/InfoSnackbar';
import {LoadingHover} from './components/LoadingHover';
import {MenuItems} from './containers/MenuItems';
import {PageTemplate} from './containers/components/PageTemplate';
import {Route} from 'react-router';
import {routes} from './routes';
import { ExamplPage } from './containers/ExamplPage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';

function App() {
  return (
    <div>
      <LoadingHover />
      <QueryClientProvider client={queryClient}>
        <InfoSnackbar />
        <BrowserRouter>
          <PageTemplate menuItems={<MenuItems/>}>
            <Routes>
              <Route path={routes.examplePage} element={<ExamplPage />} />
              <Route
                path="*"
                element={<Navigate to={routes.examplePage} />}
              />
            </Routes>
          </PageTemplate>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
