import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Sittings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Bookings from "./pages/Bookings";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function app() {
  return (
    <>
      <QueryClientProvider client={queryClint}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/users" element={<Users />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/setting" element={<Sittings />} />
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            // Define default options
            duration: 3000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              background: "va(--color-grey-0)",
              color: "va(--color-grey-700)",
            },
            // Default options for specific types
            // success: {
            //   duration: 3000,
            // },
            // error: {
            //   duration: 3000,
            // },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default app;
