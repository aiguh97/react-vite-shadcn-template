import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./routes/AuthRoutes";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Routes>
      {/* Routes Auth */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Routes Non-Auth */}
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
}

export default App;
