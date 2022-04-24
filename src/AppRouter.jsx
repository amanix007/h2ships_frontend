import React from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./components/common/CommonComponents";

import Home from "./pages/Home";
import OverView from "./pages/Overview";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Port from "./pages/Port";
import Subscribe from "./pages/Subscribe";
import Enquiry from "./pages/Enquiry";
import NewsSingle from "./pages/NewsSingle";
import Join from "./pages/Join";
import Reports from "./pages/Reports";
import Links from "./pages/Links";
import Events from "./pages/Events";
import Concepts from "./pages/Concepts";
import Pilots from "./pages/Pilots";
import SignUp from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ReportDetails from "./components/contents/reportContent/ReportDetails";
import Faq from "./pages/Faq";

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("accessToken");
  let location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default function AppRouter() {
  return (
    <Routes>
      {/* new designs ======================*/}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/overview" element={<OverView />} />
      <Route exact path="/concepts" element={<Concepts />} />
      <Route exact path="/pilots" element={<Pilots />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/news/news-details" element={<NewsSingle />} />
      <Route exact path="/port" element={<Port />} />
      <Route exact path="/subscribe" element={<Subscribe />} />
      <Route exact path="/enquiry" element={<Enquiry />} />
      <Route exact path="/reports" element={<Reports />} />
      <Route exact path="/reports/report-details" element={<ReportDetails />} />
      <Route exact path="/links" element={<Links />} />
      <Route exact path="/join" element={<Join />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />
      {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
