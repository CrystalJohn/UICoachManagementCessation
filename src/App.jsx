import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Layout } from "./components/Layout";
import { Overview } from "./screens/Overview/Overview";
import { Appointments } from "./screens/Appointments/Appointment";
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

export const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};