import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Uploads from "./pages/uploads/Uploads";
import Reports from "./pages/reports/Reports";
import Clients from "./pages/clients/Clients";
import Invoices from "./pages/invoices/Invoices";
import SingleInvoices from "./pages/invoices/singleInvoices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoice" element={<SingleInvoices />} />
      </Routes>
    </Router>
  );
}

export default App;
