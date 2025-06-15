import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Layout } from "./components/Layout";
import { Overview } from "./screens/Overview/Overview";
import { Appointment } from "./screens/Appointments/Appointment";
import { Clients } from "./screens/Clients/Client";
import { Reports } from "./screens/Reports/Report"

const theme = {
  token: {
    colorPrimary: '#0d9488',
    borderRadius: 8,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Card: {
      borderRadius: 12,
    },
    Button: {
      borderRadius: 8,
    },
  },
};

// Create a layout wrapper component that applies Layout to its children
const LayoutWrapper = ({ children }) => (
  <Layout>
    {children}
  </Layout>
);

export const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<LayoutWrapper><Overview /></LayoutWrapper>} />
          <Route path="/appointments" element={<LayoutWrapper><Appointment /></LayoutWrapper>} />
          <Route path="/clients" element={<LayoutWrapper><Clients /></LayoutWrapper>} />
          <Route path="/reports" element={<LayoutWrapper><Reports /></LayoutWrapper>} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};