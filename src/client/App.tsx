import { BrowserRouter, Navigate, Routes } from "react-router-dom";

import { ExamplPage } from "./containers/ExamplPage";
import { InfoSnackbar } from "./components/InfoSnackbar";
import { LoadingHover } from "./components/LoadingHover";
import { MenuItems } from "./containers/MenuItems";
import { PageTemplate } from "./containers/components/PageTemplate";
import { QueryClientProvider } from "react-query";
import React from "react";
import { Route } from "react-router";
import { queryClient } from "./queryClient";
import { routes } from "./routes";

function App(): React.ReactNode {
  return (
    <div>
      <LoadingHover />
      <QueryClientProvider client={queryClient}>
        <InfoSnackbar />
        <BrowserRouter>
          <PageTemplate menuItems={<MenuItems />}>
            <Routes>
              <Route path={routes.examplePage} element={<ExamplPage />} />
              <Route path="*" element={<Navigate to={routes.examplePage} />} />
            </Routes>
          </PageTemplate>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
