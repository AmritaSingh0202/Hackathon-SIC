import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AddQuestions from './pages/admin/AddQuestions';
import ChangePassword from './pages/admin/ChangePassword';
import Dashboard from './pages/admin/Dashboard';
import Chatbot from './pages/user/ChatBot';
import Logout from './pages/user/Logout'; // Import Logout
import UserDashboard from './pages/user/UserDashboard';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/userRoutes';
import Feedback from './pages/user/Feedback';

const AppRoutes = ({ role }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/logout" element={<Logout />} /> {/* Logout Route */}

      {/* Admin Protected Routes */}
      <Route element={<AdminRoutes role={role} />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-questions" element={<AddQuestions />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
      </Route>

      {/* User Protected Routes */}
      <Route element={<UserRoutes role={role} />}>
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/chatbot" element={<Chatbot />} />
        <Route path="/user/feedback" element={<Feedback />} />
      </Route>

      {/* Fallback to User Dashboard for undefined routes */}
      <Route path="*" element={<Navigate to="/user/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
