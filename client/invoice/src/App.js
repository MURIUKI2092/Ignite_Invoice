import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Clients from "./components/header/Clients";
import Reports from "./components/header/Reports";
import Uploads from "./components/header/Uploads";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          } />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <Uploads />
          } />
      </Routes>
    </Router>
  );
}

export default App;
