import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomerDetails from './components/CustomerDetails';
import Customers from './components/Customers';
import Payments from './components/Payments';
import Vehicles from './components/Vehicles';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen pl-64">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F9FA]">
            <Suspense fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#82CD47]"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/customer/:id" element={<CustomerDetails />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
