import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard name="Shivanand" age={26} />} />
        <Route path="/auth" element={<Auth  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
