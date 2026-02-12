import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import TutorChat from "./pages/tutor/TutorChat";
import ProgressAnalytics from "./pages/analytics/ProgressAnalytics";
import ResourceList from "./pages/resources/ResourceList";
import SchemeList from "./pages/schemes/SchemeList";
import Profile from "./pages/profile/Profile";
import EmergencyPage from "./pages/emergency/EmergencyPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tutor"
          element={
            <ProtectedRoute>
              <TutorChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <ProgressAnalytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <ResourceList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/schemes"
          element={
            <ProtectedRoute>
              <SchemeList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/emergency"
          element={
            <ProtectedRoute>
              <EmergencyPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
